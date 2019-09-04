import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Header, Footer } from "../../"
import styles from "./post.module.scss"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

export default function BlogPostLayout({ data, location }) {
  const {
    site: { siteMetadata },
    mdx: {
      body,
      id: identifier,
      frontmatter: { title },
    },
  } = data

  let disqusConfig = {
    title,
    identifier,
    url: `${siteMetadata.siteUrl}${location.pathname}`,
  }

  return (
    <div className="page">
      <Header type="black" />

      <div className={styles.postBody}>
        <h1>{title}</h1>

        <CommentCount
          className={styles.disqusCommentCount}
          config={disqusConfig}
          placeholder={"Counting Comments..."}
        />
        <br />
        <br />

        <MDXRenderer>{body}</MDXRenderer>
        <div className="margin-top-bottom-small" />

        <Disqus config={disqusConfig} />
      </div>

      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
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
        title
        date
      }
    }
  }
`
