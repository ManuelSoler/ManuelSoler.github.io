// Latest news from the Aircraft Operations Lab, read from the Lab's WordPress
// REST API when the site is built. If the Lab site is unreachable the build
// still succeeds and the news section falls back to a plain link.

export interface LabNewsItem {
  title: string;
  url: string;
  date: Date;
  excerpt: string;
}

const ENDPOINT =
  'https://aircraftoperationslab.com/wp-json/wp/v2/posts?per_page=5&_fields=date,link,title,excerpt';

const NAMED: Record<string, string> = {
  amp: '&',
  quot: '"',
  apos: "'",
  lt: '<',
  gt: '>',
  nbsp: ' ',
  hellip: '…',
  ndash: '–',
  mdash: '—',
};

function decode(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => NAMED[n.toLowerCase()] ?? m)
    .replace(/\s+/g, ' ')
    .trim();
}

function shorten(text: string, max = 220): string {
  const clean = text.replace(/\s*\[?…\]?$/, '').replace(/\s*\[&hellip;\]$/, '');
  if (clean.length <= max) return clean;
  return clean.slice(0, clean.lastIndexOf(' ', max)) + '…';
}

let cached: Promise<LabNewsItem[]> | undefined;

async function load(): Promise<LabNewsItem[]> {
  try {
    const res = await fetch(ENDPOINT, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const posts = (await res.json()) as any[];
    return posts.map((p) => ({
      title: decode(p.title?.rendered ?? ''),
      url: String(p.link),
      date: new Date(p.date),
      excerpt: shorten(decode(p.excerpt?.rendered ?? '')),
    }));
  } catch (err) {
    console.warn(`[lab-news] Could not load Lab news (${(err as Error).message}); showing link only.`);
    return [];
  }
}

export function getLabNews(): Promise<LabNewsItem[]> {
  cached ??= load();
  return cached;
}
