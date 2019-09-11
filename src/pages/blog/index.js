import React from "react"
import { graphql } from "gatsby"
import { Card } from "../../components"
import { DefaultLayout } from "../../components/layouts"

export default function({ data }) {
  const { edges: posts } = data.allMdx

  return (
    <DefaultLayout isContent={false}>
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
    </DefaultLayout>
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
