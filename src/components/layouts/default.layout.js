import React from "react"
import { Header, Footer } from ".."
import SEO from "../seo"

export default function({ children, frontmatter = {}, isContent }) {
  return (
    <div className="page">
      <SEO frontmatter={frontmatter} isContent={isContent} />

      <Header type="black" />

      {children}

      <Footer style={{ margin: "0" }} />
    </div>
  )
}
