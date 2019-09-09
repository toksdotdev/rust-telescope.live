import React from "react"
import { graphql } from "gatsby"
import { Header, Footer } from "../../components"
import { Card } from "../../components"

export default function({ data }) {
  const { edges: posts } = data.allMdx

  return (
    <div className="page">
      <Header type="black" />

      <div className="container">
        <br />

        <div style={{ paddingLeft: "1rem" }} className="heading">
          <h2>Blog Posts</h2>
          <p>
            Find out articles written by Rust community members, because we
            undertsand that we all depend on each other to grow.
          </p>
        </div>

        <br />

        <div className="flex-wrap">
          {posts.map(({ node }) => {
            const { title, date, creator, thumbnail } = node.frontmatter

            return (
              <Card
                title={title}
                description={node.excerpt}
                url={node.fields.slug}
                image={thumbnail}
                creator={creator}
                date={new Date(date)}
                totalComments={0}
              />
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/contents/blog-posts/" } }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            creator
            thumbnail
            twitter
          }
        }
      }
    }
  }
`
