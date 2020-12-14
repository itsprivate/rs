const isDev =
  (process.env.NODE_ENV === "development" || process.env.LOCAL === "true") &&
  process.env.LOCAL !== "false";
let localesPath =
  ".cache/gatsby-source-git/itsprivate/ts/RedditTop/i18n/i18next";
if (isDev) {
  localesPath =
    ".cache/gatsby-source-git/itsprivate/ts-test/RedditTop/i18n/i18next";
}
let plugins = [];
if (isDev) {
  // development not include the whole data
  plugins.push({
    resolve: `@theowenyoung/gatsby-source-git`,
    options: {
      name: `RedditTop`,
      remote: `git@github.com:itsprivate/ts-test.git`,
      branch: `main`,
      // Only import the docs folder from a codebase.
      patterns: [
        "data/reddit-stocks/**",
        "data/tweet-stocks/**",
        "data/reddit-stocks-issues/**",
        "data/reddit-placeholder/1.json",
        "data/tweet-placeholder/1.json",
      ],
    },
  });
} else {
  plugins.push({
    resolve: `@theowenyoung/gatsby-source-git`,
    options: {
      name: `RedditTop`,
      remote: `https://github.com/itsprivate/ts.git`,
      branch: `main`,
      // Only import the docs folder from a codebase.
      patterns: [
        "data/reddit-stocks/**",
        "data/tweet-stocks/**",
        "data/reddit-stocks-issues/**",
        "data/reddit-placeholder/1.json",
        "data/tweet-placeholder/1.json",
      ],
    },
  });
}
plugins = plugins.concat([
  {
    resolve: `gatsby-theme-buzzing`,
    options: {
      tweetTypeName: ["TweetJson"],
      redditTypeName: ["RedditJson"],
      issueTypeName: ["RedditStocksIssuesJson"],
      localesPath: localesPath,
      disqus: {
        shortname: "stock-market",
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `股市热门讨论`,
      short_name: `股市热门`,
      start_url: `/`,
      lang: `zh`,
      description: `用中文浏览国外股票社区里的热门讨论`,
      background_color: `#f7f0eb`,
      theme_color: `#FF4500`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      localize: [
        {
          start_url: `/en/`,
          lang: `en`,
          name: `Buzzing on Stocks`,
          short_name: `HotStocks`,
          description: `See popular discussions in foreign stock communities in your native language`,
        },
        {
          start_url: `/zh-Hant/`,
          lang: `zh-Hant`,
          name: `股市熱門討論`,
          short_name: `股市熱門`,
          description: `用中文瀏覽國外股票社區裡的熱門討論`,
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-GQVR44BC8T", // Google Analytics / GA
      ],
    },
  },
]);
module.exports = {
  plugins: plugins,
  siteMetadata: {
    title: `Buzzing on Stocks`,
    author: `Buzzing.cc`,
    description: `See popular discussions in foreign stock communities in your native language`,
    keywords: ["buzzing", "stocks", "U.S. stocks"],
    siteUrl: "https://stocks.buzzing.cc",
    menuLinks: [
      {
        name: "Weekly Selection",
        url: "/issues",
      },
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
  },
};
