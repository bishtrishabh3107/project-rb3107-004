require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-HY207MQRFY', // Google Analytics / GA
        ],

        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://strapi-mongodb-rb3107.herokuapp.com',
        // process.env.DEPLOY_URL
        //   ? 'https://strapi-mongodb-rb3107.herokuapp.com'
        //   : 'http://localhost:1337',
        contentTypes: ['article', 'category', 'product'],
        singleTypes: [`global`, `homepage`],
        queryLimit: 2000,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/sociallyacclaimed/`, `/trending/`],
      },
    },
  ],
};
