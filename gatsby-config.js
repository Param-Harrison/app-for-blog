module.exports = {
  siteMetadata: {
    title: "Param Harrison's Blog - Web app as a Website!",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        preprocess: true,
      },
    },
  ],
}
