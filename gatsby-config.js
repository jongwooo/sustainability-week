const metaConfig = require("./gatsby-meta-config");

module.exports = {
    siteMetadata: {
        ...metaConfig
    },
    pathPrefix: "/sustainability-week",
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            }
        }
    ],
};
