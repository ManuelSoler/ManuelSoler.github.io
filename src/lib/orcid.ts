// Publication list read from the public ORCID record when the site is built.
// If ORCID is unreachable the build still succeeds and the page links to the
// ORCID profile instead.

import { extraPublications } from '../data/extraPublications';

const ORCID_ID = '0000-0002-4664-1693';
const API = `https://pub.orcid.org/v3.0/${ORCID_ID}`;
const HEADERS = { Accept: 'application/json' };

export interface Work {
  title: string;
  year: number | null;
  type: string;
  venue: string | null;
  url: string | null;
  authors: string[];
}

export interface WorkGroup {
  id: string;
  label: string;
  works: Work[];
}

const GROUPS: { id: string; label: string; types: string[] }[] = [
  { id: 'journal-articles', label: 'Journal articles', types: ['journal-article'] },
  { id: 'conference-papers', label: 'Conference papers', types: ['conference-paper', 'conference-abstract', 'conference-poster'] },
  { id: 'books-and-chapters', label: 'Books and book chapters', types: ['book', 'book-chapter', 'edited-book'] },
  { id: 'preprints', label: 'Preprints', types: ['preprint', 'working-paper'] },
];
const OTHER = { id: 'other', label: 'Reports and other works' };

const clean = (s: string) =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const key = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

async function getJson(url: string): Promise<any> {
  const res = await fetch(url, { headers: HEADERS, signal: AbortSignal.timeout(20_000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

async function load(): Promise<Work[]> {
  const summary = await getJson(`${API}/works`);
  const summaries: any[] = (summary.group ?? []).map((g: any) => g['work-summary'][0]);

  // Author lists are only available in the full records, fetched 100 at a time.
  const authors = new Map<number, string[]>();
  for (let i = 0; i < summaries.length; i += 100) {
    const codes = summaries.slice(i, i + 100).map((s) => s['put-code']);
    try {
      const bulk = await getJson(`${API}/works/${codes.join(',')}`);
      for (const item of bulk.bulk ?? []) {
        const w = item.work;
        if (!w) continue;
        const names = (w.contributors?.contributor ?? [])
          .map((c: any) => c['credit-name']?.value)
          .filter(Boolean)
          .map(clean);
        authors.set(w['put-code'], names);
      }
    } catch (err) {
      console.warn(`[orcid] Could not load author lists (${(err as Error).message}).`);
    }
  }

  const works: Work[] = summaries.map((s) => {
    const ids: any[] = s['external-ids']?.['external-id'] ?? [];
    const doi = ids.find((x) => x['external-id-type'] === 'doi')?.['external-id-value'];
    const year = Number(s['publication-date']?.year?.value);
    return {
      title: clean(s.title?.title?.value ?? 'Untitled'),
      year: year > 1900 ? year : null,
      type: s.type,
      venue: s['journal-title']?.value ? clean(s['journal-title'].value) : null,
      url: doi ? `https://doi.org/${doi}` : (s.url?.value ?? null),
      authors: authors.get(s['put-code']) ?? [],
    };
  });

  return works;
}

function group(orcidWorks: Work[]): WorkGroup[] {
  const have = new Set(orcidWorks.map((w) => key(w.title)));
  const works = [...orcidWorks, ...extraPublications.filter((w) => !have.has(key(w.title)))];

  // Drop a preprint when the same title was later published elsewhere.
  const preprintTypes = new Set(GROUPS.find((g) => g.id === 'preprints')!.types);
  const published = new Set(works.filter((w) => !preprintTypes.has(w.type)).map((w) => key(w.title)));
  const kept = works.filter((w) => !preprintTypes.has(w.type) || !published.has(key(w.title)));

  const byYear = (a: Work, b: Work) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title);
  const known = new Set(GROUPS.flatMap((g) => g.types));
  const groups: WorkGroup[] = GROUPS.map((g) => ({
    id: g.id,
    label: g.label,
    works: kept.filter((w) => g.types.includes(w.type)).sort(byYear),
  }));
  groups.push({ ...OTHER, works: kept.filter((w) => !known.has(w.type)).sort(byYear) });
  return groups.filter((g) => g.works.length > 0);
}

let cached: Promise<WorkGroup[]> | undefined;

export function getPublications(): Promise<WorkGroup[]> {
  cached ??= load()
    .catch((err) => {
      console.warn(`[orcid] Could not load publications (${(err as Error).message}); showing hand-added works only.`);
      return [] as Work[];
    })
    .then(group);
  return cached;
}

export function formatAuthors(authors: string[], max = 12): string {
  if (authors.length === 0) return '';
  if (authors.length <= max) return authors.join(', ');
  return `${authors.slice(0, 5).join(', ')}, et al.`;
}
