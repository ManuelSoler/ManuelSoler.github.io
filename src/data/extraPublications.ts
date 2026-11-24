// Works added by hand because they are not in the ORCID record yet
// (accepted papers, for instance). Once a work appears in ORCID with the same
// title, the ORCID entry is used and the one here is ignored.
import type { Work } from '../lib/orcid';

const sids2026 = 'SESAR Innovation Days 2026, Cork, Ireland, 7–10 December 2026 (to be presented)';

export const extraPublications: Work[] = [
  {
    title: 'Investigating the role of uncertainties in climate-optimized flight planning',
    year: 2026,
    type: 'conference-paper',
    venue: sids2026,
    url: null,
    authors: [
      'Zarah Lea Zengerling',
      'Ruben Grunau',
      'Benjamin Lührs',
      'Alexander Lau',
      'Sigrun Matthes',
      'Katarina Grubbe Hildebrandt',
      'Feijia Yin',
      'Abolfazl Simorgh',
      'Manuel Soler',
    ],
  },
  {
    title: 'Targeted Mitigation of NOx-Induced Ozone Warming through Flight Planning',
    year: 2026,
    type: 'conference-paper',
    venue: sids2026,
    url: null,
    authors: [
      'Abolfazl Simorgh',
      'Manuel Soler',
      'Javier García-Heras',
      'Katarina Grubbe Hildebrandt',
      'Feijia Yin',
      'Sigrun Matthes',
      'Monica Sharma',
      'Zarah Zengerling',
      'Ruben Grunau',
      'Benjamin Lührs',
      'Alexander Lau',
    ],
  },
  {
    title: 'Contrail-Aware Commercial Aircraft Trajectory Optimization Using Gridded MultiCon',
    year: 2026,
    type: 'conference-paper',
    venue: sids2026,
    url: null,
    authors: ['Amin Jafarimoghaddam', 'Abolfazl Simorgh', 'Manuel Soler'],
  },
];
