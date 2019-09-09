import React from "react"
import { graphql } from "gatsby"
import { Header, Footer } from "../"
import SEO from "../seo"

export default function({ data, location }) {
  const {
    mdx: { frontmatter },
  } = data

  return (
    <React.Fragment>
      <SEO frontmatter={data.mdx.frontmatter} isContent={true} />

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
    </React.Fragment>
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
