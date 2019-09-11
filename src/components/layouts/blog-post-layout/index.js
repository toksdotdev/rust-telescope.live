import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultLayout from "../default.layout"
import styles from "./post.module.scss"

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
    <DefaultLayout isContent={true} frontmatter={data.mdx.frontmatter}>
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
    </DefaultLayout>
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
        description
        date
        creator
        thumbnail
        twitter
      }
    }
  }
`
