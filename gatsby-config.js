/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Rust Telescope`,
    siteUrl: `https://www.rust-telescope.live`,
    description: `A bi-weekly and monthly video cast focused on educating new and experienced Rustaceans on Rust programming language.`,
    image: "https://lengstorf.com/images/jason-lengstorf.jpg",
    author: {
      name: "Tochukwu Nkemdilim",
    },
    organization: {
      name: "Rust Telescope",
      url: "https://rust-telescope.live",
      logo: "https://lengstorf.com/android-chrome-512x512.png",
    },
    social: {
      twitter: "@tnkemdilim",
    },
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/contents/blog-posts`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rust-a-little`,
        path: `${__dirname}/src/contents/rust-a-little`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interviews`,
        path: `${__dirname}/src/contents/interviews`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hacking-with-rust`,
        path: `${__dirname}/src/contents/hacking-with-rust`,
      },
    },

    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `rust-telescope`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        posts: require.resolve(
          "./src/components/layouts/blog-post-layout/index.js"
        ),
        "hacking-with-rust": require.resolve(
          "./src/components/layouts/video.layout.js"
        ),
        "rust-little": require.resolve(
          "./src/components/layouts/video.layout.js"
        ),
        interviews: require.resolve("./src/components/layouts/video.layout.js"),
        default: require.resolve("./src/components/layouts/default.layout.js"),
        mdPlugins: [
          require("remark-images"),
          require("remark-emoji"),
          require("remark-slug"),
          require("remark-autolink-headings"),
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },

          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 1080,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },

          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: "monokai Pro",
              extensionDataDirectory: require("path").resolve("extensions"),
              extensions: [
                {
                  identifier: "monokai.theme-monokai-pro-vscode",
                  version: "1.1.13",
                },
              ],
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=5b25249cb2ea3202f452da28d&amp;id=4a05b3df08",
      },
    },
  ],
}
