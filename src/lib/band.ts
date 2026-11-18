// Background photographs for the dark header band of inner pages.
// Each page picks one by key; the photo is blurred and darkened in CSS (.pband).
import { getImage } from 'astro:assets';
import contrails from '../assets/hero-contrails.jpg';
import sky from '../assets/bands/aircraft-sky.jpg';
import wing from '../assets/bands/aircraft-wing.jpg';
import apron from '../assets/bands/aircraft-2.jpg';

const photos = { contrails, sky, wing, apron };

export type BandPhoto = keyof typeof photos;

export async function bandStyle(photo: BandPhoto, position = 'center'): Promise<string> {
  const img = await getImage({ src: photos[photo], width: 1600, format: 'webp', quality: 60 });
  return `--band: url('${img.src}'); --band-pos: ${position};`;
}
