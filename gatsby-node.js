const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const routing = {
  "/contents/blog-posts/": {
    base: "blog",
    layout: path.resolve("./src/components/layouts/blog-post-layout/index.js"),
  },
  "/contents/rust-a-little/": {
    base: "rust-a-little",
    layout: path.resolve("./src/components/layouts/video-layout.js"),
  },
  "/contents/interviews/": {
    base: "interviews",
    layout: path.resolve("./src/components/layouts/video-layout.js"),
  },
  "/contents/hacking-with-rust/": {
    base: "hacking-with-rust",
    layout: path.resolve("./src/components/layouts/video-layout.js"),
  },
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    Object.keys(routing).map(route => {
      let value = createFilePath({
        node,
        getNode,
        basePath: routing[route].base,
      })

      if (node.fileAbsolutePath.indexOf(route) >= 0) {
        createNodeField({
          node,
          name: "slug",
          value: `/${routing[route].base}${value}`,
        })
      }
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  Object.keys(routing).map(async route => {
    const result = await graphql(`
      query {
        allMdx(filter: { fileAbsolutePath: { regex: "${route}" } }) {
          edges {
            node {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create pages.
    let pages = result.data.allMdx.edges

    pages.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: routing[route].layout,
        context: { id: node.id, route: route, slug: node.fields.slug },
      })
    })
  })
}
