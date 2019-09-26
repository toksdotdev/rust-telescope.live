import React from "react"
import { Badge } from "../"
import { graphql } from "gatsby"
import DefaultLayout from "./default.layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function({ data, location }) {
  const {
    mdx: { frontmatter, body },
  } = data

  const { url, description, title, coming_soon } = frontmatter

  return (
    <DefaultLayout isContent={true} frontmatter={data.mdx.frontmatter}>
      {coming_soon ? (
        <div style={{ padding: "15% 12.5%", textAlign: "justify" }}>
          <div style={{ textAlign: "center" }}>
            <h2>{title}</h2>
            <Badge text={"Video coming soon"} bg="#dc3545" color="#fff" />
          </div>

          <br />
          <p>{description}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      ) : (
        <iframe
          title={title}
          width="100%"
          height="72.2%"
          frameBorder="0"
          style={{ margin: 0, padding: 0, marginBottom: "-6px" }}
          src={url}
        ></iframe>
      )}
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query VideoQuery($id: String) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        url
        title
        description
        coming_soon
      }
    }
  }
`
