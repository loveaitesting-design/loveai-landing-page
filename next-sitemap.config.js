/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.loveai.co.il',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*'],
  alternateRefs: [
    {
      href: 'https://www.loveai.co.il/en',
      hreflang: 'en',
    },
    {
      href: 'https://www.loveai.co.il/he',
      hreflang: 'he',
    },
    {
      href: 'https://www.loveai.co.il/ru',
      hreflang: 'ru',
    },
  ],
};
