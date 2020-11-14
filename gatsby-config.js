module.exports = {
  siteMetadata: {
    title: `Hari Bhandari`,
    description: `Full-Stack Software Developer, Designer, and Freelancer`,
    author: `Hari Bhandari`,
    keywords: [
      `Hari Bhandari`, `Java`, `full-stack`, `software`, `developer`,
      `design`, `portfolio`, `blog`, `python`, `javascript`,
      `react`, `gatsby`, `website optimization`,
    ],
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
        external: false,
      },
      {
        name: `Design`,
        link: `https://brettstevenson.design/`,
        external: true,
      },
      {
        name: `Blog`,
        link: `/blog/`,
        external: false,
      },
      {
        name: `Contact`,
        link: `/contact/`,
        external: false,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
