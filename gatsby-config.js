// require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Danceland`,
    description: `The History Of A Midwest Ballroom`,
    summary: ``,
    author: `Steve Wilson`,
    developer: `Dan Choiniere`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
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
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Kalam",
            "Open Sans",
            "Quicksand",
            "Hepta Slab",
            "Noto Serif",
            "Londrina Outline",
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-env-variables`,
    //   options: {
    //     whitelist: ["GATSBY_AIRTABLE_API_KEY"],
    //   },
    // },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        tables: [
          {
            apiKey: `keyizP1f7z8SyvUzX`,
            baseId: `appuy1aNCsQH9hOAw`,
            tableName: `earlyYears`,
          },
          {
            apiKey: `keyizP1f7z8SyvUzX`,
            baseId: `appuy1aNCsQH9hOAw`,
            tableName: `data1954`,
          },
          {
            apiKey: `keyizP1f7z8SyvUzX`,
            baseId: `appuy1aNCsQH9hOAw`,
            tableName: `data1955`,
          },
          {
            apiKey: `keyizP1f7z8SyvUzX`,
            baseId: `appuy1aNCsQH9hOAw`,
            tableName: `data1956`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
