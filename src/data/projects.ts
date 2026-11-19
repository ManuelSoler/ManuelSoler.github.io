import type { ImageMetadata } from 'astro';
import f4eclim from '../assets/projects/f4eclim.png';
import econtrail2 from '../assets/projects/e-contrail-2.png';
import climation from '../assets/projects/climation.png';
import contrailAware from '../assets/projects/contrail-aware.png';
import issrAware from '../assets/projects/issr-aware.png';
import harmonyMrv from '../assets/projects/harmony-mrv.png';
import kairos from '../assets/projects/kairos.png';
import refmap from '../assets/projects/refmap.png';
import econtrail from '../assets/projects/e-contrail.png';
import hydrogenating from '../assets/projects/hydrogenating.png';
import stormats from '../assets/projects/stormats.png';
import intelmet from '../assets/projects/intelmet.png';
import alarm from '../assets/projects/alarm.png';
import start from '../assets/projects/start.png';
import flyatm4e from '../assets/projects/flyatm4e.png';
import fmpMet from '../assets/projects/fmp-met.png';
import isobar from '../assets/projects/isobar.png';
import metats from '../assets/projects/metats.png';
import stormy from '../assets/projects/stormy.png';
import tboMet from '../assets/projects/tbo-met.png';

export interface Project {
  name: string;
  title: string;
  funding: string;
  period?: string;
  role?: string;
  url?: string;
  /** Project and funder logos, shown faded on the page. */
  logo?: ImageMetadata;
}

export const ongoing: Project[] = [
  {
    name: 'F4EClim',
    title: 'Flying ATM for Environment and Climate.',
    url: 'https://www.f4eclim.eu',
    role: 'PI',
    period: '2024–2027',
    funding: 'SESAR 3 JU · Horizon Europe · Grant 101167020',
    logo: f4eclim,
  },
  {
    name: 'E-CONTRAIL 2',
    title:
      'Multi-sensor, physics-informed contrail detection, radiative forcing estimation and interactive climate analytics.',
    url: 'https://www.econtrail.com',
    role: 'Coordinator',
    funding: 'SESAR 3 JU · Horizon Europe · Grant 101287164',
    logo: econtrail2,
    period: '2026–2028',
  },
  {
    name: 'ClimAtion',
    title: 'Climate-smart optimal aircraft operations for next-generation aviation.',
    funding: 'Spanish National R&D Plan · Knowledge Generation 2024',
    role: 'PI, with J. García-Heras',
    url: 'https://aircraftoperationslab.com/climation',
    logo: climation,
    period: '2025–2028',
  },
  {
    name: 'Contrail Aware',
    title: 'Advancing state-of-the-art contrail research into a practical industry solution.',
    funding: 'Public–private collaboration · MICIU/AEI',
    role: 'PI',
    url: 'https://aircraftoperationslab.com/contrail-aware',
    logo: contrailAware,
    period: '2025–2028',
  },
  {
    name: 'ISSR-Aware',
    title: 'Assessing ice-supersaturated region forecasting for climate-aware air traffic flow and capacity management.',
    funding: 'Engage 2 catalyst funds',
    period: '2026–2027',
    role: 'PI, with J. García-Heras',
    url: 'https://aircraftoperationslab.com/issr',
    logo: issrAware,
  },
  {
    name: 'HARMONY-MRV',
    title:
      'A non-CO₂ monitoring, reporting and verification digital service with climate-impact uncertainty quantification and mitigation alternatives.',
    funding: 'Engage 2 catalyst funds',
    period: '2026–2027',
    role: 'PI, with J. García-Heras',
    url: 'https://aircraftoperationslab.com/harmony-mrv',
    logo: harmonyMrv,
  },
  {
    name: 'KAIROS',
    title: 'Unlocking the potential of AI-based weather forecasts for operational benefits.',
    url: 'https://www.kairos-eu.com',
    role: 'PI',
    period: '2023–2026',
    funding: 'SESAR 3 JU · Horizon Europe · Grant 101114701',
    logo: kairos,
  },
  {
    name: 'ContrailMIP',
    title:
      'International contrail model intercomparison project, comparing models from plume-scale processes to global climate impacts.',
    funding: 'International initiative · Imperial College London',
    role: 'Participant',
    url: 'https://www.imperial.ac.uk/aerospace-environmental-impacts/contrailmip/',
  },
];

export const completedAsPI: Project[] = [
  {
    name: 'REFMAP',
    title: 'Reducing environmental footprint through transformative multi-scale aviation planning.',
    funding: 'Horizon Europe · Grant 101096698',
    role: 'PI',
    logo: refmap,
    url: 'https://www.refmap.eu',
    period: '2023–2026',
  },
  {
    name: 'E-CONTRAIL',
    title: 'Artificial neural networks for the prediction of contrails and aviation-induced cloudiness.',
    funding: 'SESAR 3 JU · Horizon Europe · Grant 101114795',
    role: 'Coordinator',
    url: 'https://www.econtrail.com',
    period: '2023–2025',
    logo: econtrail,
  },
  {
    name: 'Hydrogenating CM-UC3M',
    title:
      'Aviation and climate change: hydrogen-powered aircraft model design and climate-optimal aircraft operations using artificial intelligence.',
    funding: 'CM-UC3M agreement',
    url: 'https://h2genating.com',
    logo: hydrogenating,
    period: '2022–2023',
  },
  {
    name: 'StormATS',
    title: 'Managing storm uncertainties for a safe and efficient air transport system.',
    funding: 'Spanish National R&D Plan · Knowledge Generation 2021',
    url: 'https://storm-ats.com/',
    logo: stormats,
    period: '2022–2025',
  },
  {
    name: 'INTELMET PoC',
    title: 'Improving the lead time and accuracy of thunderstorm predictions by utilising artificial intelligence.',
    url: 'https://aircraftoperationslab.com/intelmet-proof-of-concept/',
    logo: intelmet,
    funding: 'MCIN/AEI · NextGenerationEU/PRTR · PDC2022-133884-I00',
    period: '2022–2024',
  },
  {
    name: 'ALARM',
    title: 'Multi-hazard monitoring and early warning system.',
    funding: 'SESAR JU · Horizon 2020 · Exploratory Research (2019 call)',
    role: 'Coordinator',
    url: 'https://alarm-project.eu/',
    period: '2020–2022',
    logo: alarm,
  },
  {
    name: 'START',
    title: 'A stable and resilient ATM by integrating robust airline operations into the network.',
    funding: 'SESAR JU · Horizon 2020 · Exploratory Research (2019 call)',
    role: 'Coordinator',
    url: 'https://start-atm.com/',
    period: '2020–2022',
    logo: start,
  },
  {
    name: 'FlyATM4E',
    title: 'Flying Air Traffic Management for the benefit of environment and climate.',
    funding: 'SESAR JU · Horizon 2020 · Exploratory Research (2019 call)',
    url: 'https://flyatm4e.eu/',
    period: '2020–2022',
    logo: flyatm4e,
  },
  {
    name: 'FMP-Met',
    title: 'Meteorological uncertainty management for Flow Management Positions.',
    funding: 'SESAR JU · Horizon 2020 · Exploratory Research (2019 call)',
    url: 'https://fmp-met.com/',
    period: '2020–2022',
    logo: fmpMet,
  },
  {
    name: 'ISOBAR',
    title: 'Artificial intelligence solutions to meteo-based DCB imbalances for network operations planning.',
    funding: 'SESAR JU · Horizon 2020 · Exploratory Research (2019 call)',
    url: 'https://isobar-project.eu/',
    period: '2020–2022',
    logo: isobar,
  },
  {
    name: 'MetATS',
    title: 'Managing meteorological uncertainty for a more efficient air traffic system.',
    funding: 'Spanish National R&D Plan · Retos Investigación 2018 · RTI2018-098471-B-C32',
    logo: metats,
    period: '2019–2022',
  },
  {
    name: 'STORMY',
    title:
      'A pilot/dispatcher support tool based on the enhanced provision of thunderstorm forecasts considering their inherent uncertainty.',
    funding: 'Engage · SESAR Knowledge Transfer Network',
    period: '2019–2021',
    logo: stormy,
  },
  {
    name: 'TBO-Met',
    title: 'Meteorological uncertainty management for trajectory-based operations.',
    funding: 'SESAR JU · Horizon 2020 · H2020-SESAR-2015-1',
    period: '2016–2018',
    url: 'https://tbomet-h2020.com/',
    logo: tboMet,
  },
  {
    name: 'OptMet',
    title: 'Analysis and optimization of aircraft trajectories under the effects of meteorological uncertainties.',
    funding: 'Spanish National R&D Plan · TRA2014-58413-C2-2-R',
    period: '2015–2018',
    url: 'https://optmet.wordpress.com/',
  },
  {
    name: 'HALA! research project',
    title:
      'Stochastic optimal control towards enhanced predictability of four-dimensional trajectories using weather ensemble prediction forecasts.',
    funding: 'Eurocontrol · HALA! Research Network',
    period: '2014–2016',
  },
];

export const completedAsResearcher: Project[] = [
  {
    name: 'POTRA',
    title: 'Parametric optimization software package for trajectory shaping under constraints.',
    funding: 'EU FP7 · Clean Sky Joint Technology Initiative · Grant 270624',
    period: '2011–2013',
  },
  {
    name: 'Plannin',
    title: 'Optimización en computación en paralelo de planificación bajo incertidumbre.',
    funding: 'Spanish National R&D Plan · MTM2009-14087-C04-01',
    period: '2009–2012',
  },
  {
    name: 'ATLANTIDA',
    title: 'Application of leading technologies to unmanned aerial vehicles for research and development in ATM.',
    funding: 'CDTI · CENIT Programme',
    period: '2008–2012',
  },
];
