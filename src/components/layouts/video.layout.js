import React from "react"
import { graphql } from "gatsby"
import DefaultLayout from "./default.layout"

export default function({ data, location }) {
  const {
    mdx: { frontmatter },
  } = data

  const { url, description, title, coming_soon } = frontmatter

  return (
    <DefaultLayout isContent={true} frontmatter={data.mdx.frontmatter}>
      {coming_soon ? (
        <div style={{ padding: "17.5%", textAlign: "center" }}>
          <h2>{title}</h2>
          <h4>(Coming Soon)</h4>
          <p>{description}</p>
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
      frontmatter {
        url
        title
        description
        coming_soon
      }
    }
  }
`
