import React from "react"

export default ({ ...props }) => (
  <input
    {...props}
    style={{
      marginBottom: "2em",
      borderRadius: "20px",
      border: "1px solid",
      padding: "10px 32px",
      textDecoration: "none",
    }}
  />
)
