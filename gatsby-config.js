require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Chubut Invisible`,
    description: `Recopilacion de los abusos que hoy existen en la provincia de Chubut`,
    author: `@gatsbyjs`,
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
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appnZOhuQPd6jqT3m`,
            tableName: `noticias`,
          },

          // We can add other bases/tables here, too!
          //{
          //baseId: `AIRTABLE_BASE_ID`,
          //tableName: `Sides`
          //}
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chubut invisible`,
        short_name: `FueraArcioni`,
        start_url: `/`,
        background_color: `#c53030`,
        theme_color: `#c53030`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
