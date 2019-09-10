import React from "react"
import styles from "./button.module.scss"

export default ({ text, ...rest }) => (
  <button {...rest} className={styles.button}>
    {text}
  </button>
)
