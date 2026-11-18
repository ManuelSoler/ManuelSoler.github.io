export interface Thesis {
  name: string;
  title: string;
  supervisors: string;
  programme: string;
  note?: string;
  url?: string;
}

const UC3M = 'PhD in Aerospace Engineering, UC3M';

export const ongoingTheses: Thesis[] = [
  {
    name: 'Najib Valeyev',
    title: 'Calibration of Long-Term Contrail Evolution Using Multi-Sensor Observations',
    supervisors: 'Manuel Soler',
    programme: UC3M,
    url: 'https://phd-aerospace.uc3m.es/portfolio/najib-valeyev/',
  },
  {
    name: 'Raúl Quibén',
    title: 'H₂-fuelled aircraft configuration and trajectory optimisation to reduce aeronautic environmental impact',
    supervisors: 'Manuel Soler and Rauno Cavallaro (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/raul-quiben-figueroa/',
  },
  {
    name: 'Irene Ortiz',
    title: 'Artificial Neural Networks for the Prediction of Contrails and Aviation Induced Cloudiness',
    supervisors: 'Manuel Soler and Javier García-Heras (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/irene-ortiz-abuja/',
  },
  {
    name: 'Iván Martínez',
    title: 'Improving Severe Weather Hazard Prediction for Aviation using Machine Learning',
    supervisors: 'Javier García-Heras and Manuel Soler (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/ivan-martinez-vidal/',
  },
];

export const completedTheses: Thesis[] = [
  {
    name: 'Alejandra Martín Frías',
    title:
      'Implementation and analysis of climate models in a commercial flight planning optimization system. Development of a climate cost function and proposal of environmental policies for operators',
    supervisors: 'Raimund Zopp (Flightkeys) and Manuel Soler (UC3M)',
    programme: UC3M,
    note: 'Currently at Flightkeys.',
    url: 'https://uc3m-phd-aerospace.es/portfolio/alejandra-martin-frias/',
  },
  {
    name: 'Rémi Chevallier',
    title: 'Evaluation and Minimization of airlines operations climate impact by Trajectory Optimization',
    supervisors: 'Daniel Delahaye and Manuel Soler',
    programme: 'PhD programme at ENAC (CIFRE Airbus)',
  },
  {
    name: 'Fateme Baneshi',
    title: 'Network-wide Robust Climate Optimal Aircraft Trajectory Planning',
    supervisors: 'Manuel Soler (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/fateme-baneshi/',
  },
  {
    name: 'Shumpei Kamo',
    title:
      'Robust Aircraft Trajectory Optimization and its Extension to Arrival Sequencing Considering Weather Forecast Uncertainties',
    supervisors: 'Hartmut Fricke (TU Dresden); advisor: Manuel Soler (UC3M)',
    programme: 'PhD programme at TU Dresden',
  },
  {
    name: 'Abolfazl Simorgh',
    title: 'Aircraft Trajectory Optimization and Climate Change',
    supervisors: 'Manuel Soler (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/abolfazl-simorgh/',
  },
  {
    name: 'Amin Jafarimoghaddam',
    title:
      'Innovative analytical/metaheuristic techniques to solve complex trajectory optimization problems involving climate impacts',
    supervisors: 'Manuel Soler (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/amin-jafarimoghaddam/',
  },
  {
    name: 'Aniel Jardines',
    title: 'Applying machine learning techniques to improve ATFM operations during convective weather',
    supervisors: 'Manuel Soler (UC3M)',
    programme: 'UC3M',
    note: 'Currently CEO at AI Methods.',
  },
  {
    name: 'Eduardo Andrés Enderiz',
    title: 'Aircraft Trajectory Planning Considering Ensemble Forecasting of Thunderstorms',
    supervisors: 'Manuel Sanjurjo, Manuel Soler and M. Kamgarpour (EPFL)',
    programme: UC3M,
    note: 'Defended December 2022. Sobresaliente cum laude.',
    url: 'https://uc3m-phd-aerospace.es/portfolio/eduardo-andres/',
  },
  {
    name: 'Thomas Aleksander Frekhaug',
    title: 'Optimal Close-Operation Trajectories in Non-Conventional Dynamical Environments',
    supervisors: 'Manuel Soler and Manuel Sanjurjo Rivo (UC3M)',
    programme: UC3M,
    url: 'https://uc3m-phd-aerospace.es/portfolio/thomas-aleksander-frekhaug/',
  },
  {
    name: 'David Morante González',
    title: 'Hybrid Multi-Objective Trajectory Optimization of Low-Thrust Space Mission Design',
    supervisors: 'Manuel Sanjurjo and Manuel Soler',
    programme: 'UC3M',
    note: 'Defended 15 January 2020. Sobresaliente cum laude.',
  },
  {
    name: 'Daniele Mazzotta',
    title: 'Probabilistic Conflict Detection and Resolution and Storm Avoidance using Differential Algebra',
    supervisors: 'Manuel Soler and Lorenzo Casalino (Politecnico di Torino)',
    programme: 'Joint supervision UC3M–Politecnico di Torino',
    note: 'Defended 19 July 2019.',
  },
  {
    name: 'Daniel González Arribas',
    title: 'Robust Aircraft Trajectory Optimization under Meteorological Uncertainty',
    supervisors: 'Manuel Soler and Manuel Sanjurjo',
    programme: 'UC3M',
    note: 'Co-funded by the HALA! Research Network (SESAR WP-E). Defended 4 July 2019. Sobresaliente cum laude.',
  },
];
