import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import SchemaOrg from "./organization-schema"
import PropTypes from "prop-types"

// This code is an extract from: https://github.com/jlengstorf/gatsby-theme-jason-blog/blob/master/src/components/SEO/SEO.js
const SEO = ({ postData, frontmatter = {}, isContent }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            siteUrl
            description
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const postMeta =
        frontmatter || postData.childMarkdownRemark.frontmatter || {}

      const title = postMeta.title || seo.title
      const description = postMeta.description || seo.description
      const twitter = postMeta.twitter || seo.twitter
      const image = postMeta.thumbnail || seo.image
      const datePublished = isContent ? postMeta.date : false
      const url = postMeta.slug
        ? `${seo.siteUrl}/${postMeta.slug}/`
        : postMeta.url || seo.siteUrl

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            {isContent ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>

          <SchemaOrg
            isContent={isContent}
            url={url}
            title={title}
            image={image}
            description={description}
            datePublished={datePublished}
            siteUrl={seo.siteUrl}
            creator={seo.creator}
            organization={seo.organization}
            defaultTitle={seo.title}
          />
        </React.Fragment>
      )
    }}
  />
)

SEO.propTypes = {
  isContent: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
}

SEO.defaultProps = {
  isContent: false,
  postData: { childMarkdownRemark: {} },
}

export default SEO
