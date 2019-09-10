import React from "react"
import { Header, Footer, Card } from "../../components"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { edges: videos } = data.allMdx

  return (
    <div>
      <Header type="black" />

      <div className="container">
        <br />
        <div style={{ paddingLeft: "1rem" }}>
          <h2>Interviews</h2>
          <p>
            Short interviews with Rustaceans, encompassing Rust adoption in
            companies or side projects.
          </p>
        </div>
        <br />

        <div className="flex-wrap">
          {videos.map((video, index) => {
            const {
              title,
              date,
              thumbnail,
              creator,
              description,
            } = video.node.frontmatter

            return (
              <Card
                key={index}
                title={title}
                description={description}
                url={video.node.fields.slug}
                image={thumbnail}
                creator={creator}
                date={new Date(date)}
                showTotalComments={false}
                buttonText={
                  <span role="img" aria-label="watch video">
                    📺 Watch
                  </span>
                }
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
  query InterviewIndex {
    allMdx(filter: { fileAbsolutePath: { regex: "/contents/interviews/" } }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            url
            date
            thumbnail
            creator
            description
          }
        }
      }
    }
  }
`
