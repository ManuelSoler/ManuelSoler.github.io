import { defineConfig } from 'astro/config';

// Addresses of the previous WordPress site that now live somewhere else.
// Each one becomes a small page that forwards the visitor to the new address.
const lab = 'https://aircraftoperationslab.com/';
const redirects = {
  '/home': '/',
  '/pagina-ejemplo': '/',
  '/blog': '/',
  '/news-events': '/',
  '/contact': '/cv/#contact',
  '/research-networks-and-activities': '/cv/#awards',
  '/research-team': lab,

  '/research/research-topics': '/research/',
  '/aviation-and-enviroment': '/research/',
  '/commercial-aircraft-trajectory-optimization': '/research/',
  '/low-thrust-trajectory-optimization': '/research/',
  '/meteorological-uncertainty-and-air-traffic-management-atm': '/research/',

  '/research/ph-thesis-supervision': '/phd-supervision/',
  '/research/phd-thesis-daniel-gonzalez-arribas': '/phd-supervision/',
  '/research/phd-positions-open-sept-18': '/phd-supervision/',
  '/ph-d-daniele-mazzotta': '/phd-supervision/',
  '/ph-d-david-morante': '/phd-supervision/',

  '/completed-projects': '/projects/',
  '/projects/flyatm4e': '/projects/',
  '/projects/flyatm4e/flyatm4e': '/projects/',
  '/projects/flyatm4e/fmp-met': '/projects/',
  '/projects/flyatm4e/isobar': '/projects/',
  '/projects/flyatm4e/start': '/projects/',
  '/projects/metats-project': '/projects/',
  '/projects/opt-met-project': '/projects/',
  '/stormy': '/projects/',
  '/tbo-met-sesar2020-project': '/projects/',

  '/publications/phd-thesis': '/book/#phd-thesis',
  '/book/fundamentals-of-aerospace-engineering': '/book/#fundamentals-2ed',
  '/book/lecture-notes-on-airport-engineering': '/book/#airport-engineering',
  '/book/la-astropatrulla-basurilla/taller-cohetes-de-agua-ceip-teresa-berganza-2025': '/outreach/#schools',
  '/book/description': '/book/',
  '/book/contents': '/book/',
  '/book/licence': '/book/',
  '/book/resources': '/book/',
  '/book/donate': '/book/',
  '/bloques-de-la-pagina-principal': '/',
  '/bloques-de-la-pagina-principal/book': '/book/',
  '/bloques-de-la-pagina-principal/cc-licence': '/book/',
  '/bloques-de-la-pagina-principal/collaborate': '/book/',

  '/open-source-libraries': '/software/#open-source-libraries',
  '/spin-off': '/software/#spin-off',

  '/video-gallery': '/outreach/#videos',
  '/comic-strip-un-problema-de-altos-vuelos': '/outreach/#reads',
  '/e-contrail-policy-brief': '/outreach/#reads',
  '/policy-brief': '/outreach/#reads',
  '/create-your-water-rocket': '/outreach/',
  '/semana-de-la-ciencia-2025-construye-y-lanza-un-cohete-de-agua-de-la-mano-de-la-astropatrulla-basurilla':
    '/outreach/#science-events',

  '/air-navigation-systems': '/teaching/',
  '/teaching/aerospace-engineering': '/teaching/',
  '/teaching/air-navigation': '/teaching/',
  '/teaching/edx-mooc-the-conquest-of-space': '/teaching/',
  '/teaching/graduate-undergraduate-courses': '/teaching/',
  '/bsc-and-msc-thesis': '/teaching/',
  '/aerial-navigation-air-transport-and-airports': '/teaching/aerial-navigation-airports-and-air-transport/',
};

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.aerospaceengineering.es',
  redirects,
});
