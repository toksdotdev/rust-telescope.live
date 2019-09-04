import React from "react"
import { graphql } from "gatsby"
import { Header, Footer } from "../"

export default function({ data, location }) {
  const {
    mdx: { frontmatter },
  } = data

  return (
    <div className="page">
      <Header type="black" />

      <iframe
        title={frontmatter.title}
        width="100%"
        height="72.2%"
        frameBorder="0"
        style={{ margin: 0, padding: 0, marginBottom: "-10px" }}
        src={frontmatter.url}
      ></iframe>

      <Footer style={{ margin: 0 }} />
    </div>
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
      frontmatter {
        url
        title
      }
    }
  }
`
