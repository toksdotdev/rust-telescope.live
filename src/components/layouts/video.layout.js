import React from "react"
import { graphql } from "gatsby"
import DefaultLayout from "./default.layout"

export default function({ data, location }) {
  const {
    mdx: { frontmatter },
  } = data

  return (
    <DefaultLayout isContent={true} frontmatter={data.mdx.frontmatter}>
      <iframe
        title={frontmatter.title}
        width="100%"
        height="72.2%"
        frameBorder="0"
        style={{ margin: 0, padding: 0, marginBottom: "-6px" }}
        src={frontmatter.url}
      ></iframe>
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
      frontmatter {
        url
        title
      }
    }
  }
`
