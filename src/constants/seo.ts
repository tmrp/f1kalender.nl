export const SEO = {
  config: {
    name: 'F1 Kalender',
    type: 'website',
    url: 'https://f1kalender.nl',
    locale: 'eu_NL',
    author: 'Timothy Peterson',
    title: 'F1 Kalender',
    contextType: 'website',
    description: 'De meest recente F1 tijden weergegeven in Nederlands tijd',
    favicon: '/f1-kalender-favicon.ico',
    image: '/images/f1-kalender-seo-image.png',
    logo: '/images/f1-kalender-seo-image.png',
    twitterHandle: '@thetimpeterson',
    themeColor: '#EF4444',
  },
  metaTags: {
    pages: {
      overview: {
        pageTitle: 'F1 Kalender',
      },
      configurator: {
        pageTitle:
          'F1 Kalender - Het meest recente F1 tijdschema in het Nederlands',
        description:
          'De meest recente F1 tijden weergegeven in Nederlands tijd.',
      },
    },
  },
};

export const ROBOTS = {
  staging: ``,
  production: `# Allow all crawlers \n User-agent: * \n Allow: /`,
};
