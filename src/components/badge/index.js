import React from "react"

// TODO: Use uniform names for the badges e.g. danger, warning.
export default ({ text, bg = "#dc3545", color = "#fff" }) => (
  <span
    style={{
      backgroundColor: bg,
      color: color,
      border: "1px solid",
      borderRadius: "10px",
      padding: "3px 11px",
    }}
  >
    <small>{text}</small>
  </span>
)
