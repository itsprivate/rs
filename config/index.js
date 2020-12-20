const siteMetadata = {
  siteUrl: "https://stocks.buzzing.cc",
  author: `Internet`,
  locale: "zh",
  title: "国外股市热门",
  shortTitle: "股市热门",
  description: "用中文浏览国外股票社区里的热门讨论",
  keywords: ["buzzing","美股","股票","股市"],
  menuLinks: [
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Reddit Stocks`,
      url: `https://www.reddit.com/r/stocks`,
      external: true,
    },
    {
      name: `Reddit Investing`,
      url: `https://www.reddit.com/r/investing`,
      external: true,
    },
    {
      name: `Charlie Bilello's twitter`,
      url: `https://twitter.com/charliebilello`,
      external: true,
    },
  ],
  localize: [
    {
      locale:'en',
      title: `Buzzing on Stocks`,
      description: `See popular discussions in foreign stock communities in your native language`,
      keywords: ["buzzing", "stocks", "U.S. stocks"],
      siteUrl: "https://stocks.buzzing.cc",
      menuLinks: [
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },{
      locale:'zh-Hant',
      title: "國外股市熱門",
  shortTitle: "股市熱門",
  description: "用中文瀏覽國外股票社區裡的熱門討論",
  keywords: ["buzzing","美股","股票","股市"],
  menuLinks: [
    {
      name: "RSS",
      url: "/zh-Hant/rss.xml",
      prefetch: false,
    },
  ],
    }
  ],
};

module.exports = {
  siteMetadata,
};

