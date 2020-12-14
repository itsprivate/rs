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
      patterns: ["data/reddit-stocks/**", "data/reddit-stocks-issues/**"],
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
      patterns: ["data/reddit-stocks/**", "data/reddit-stocks-issues/**"],
    },
  });
}
plugins = plugins.concat([
  {
    resolve: `gatsby-theme-buzzing`,
    options: {
      tweetTypeName: ["TweetsJson", "twitterStatusesUserTimelineMyTweet"],
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
      description: `用中文浏览外文股票社区里的热门讨论，美股`,
      background_color: `#f7f0eb`,
      theme_color: `#FF4500`,
      display: `standalone`,
      icon: `src/images/icon.png`,
      localize: [
        {
          start_url: `/en/`,
          lang: `en`,
          name: `Reddit Top`,
          short_name: `RedditTop`,
          description: `The most popular posts on Reddit`,
        },
        {
          start_url: `/zh-Hant/`,
          lang: `zh-Hant`,
          name: `Reddit Top`,
          short_name: `RedditTop`,
          description: `The most popular posts on Reddit`,
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
    title: `Buzzing on Reddit`,
    author: `Reddit`,
    description: `See what's buzzing on Reddit in your native language`,
    siteUrl: "https://reddit.buzzing.cc",
    menuLinks: [
      {
        name: "Weekly Selection",
        url: "/issues",
      },
      {
        name: "RSS",
        url: "/rss.xml",
      },
    ],
    social: [
      {
        name: `Reddit`,
        url: `https://www.reddit.com/`,
        external: true,
      },
    ],
  },
};
