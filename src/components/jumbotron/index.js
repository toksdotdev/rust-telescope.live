import React from "react"
import Section from "../section"
import styles from "./jumbotron.module.scss"
import cx from "classnames"

export default ({
  content,
  illustration,
  background = "blue-green-gradient",
  size = "medium",
  reverse = false,
}) =>
  reverse ? (
    <Section className={cx("section", `section-${size}`, `${background}-bg`)}>
      <div className={cx(styles.illustration, "flex-4")}>{illustration}</div>
      <div className={"flex-1"}></div>
      <div className={cx(styles.content, "flex-4")}>{content}</div>
    </Section>
  ) : (
    <Section className={cx("section", "section-medium", `${background}-bg`)}>
      <div className={cx(styles.content, "flex-3")}>{content}</div>
      {/* <div className={"flex-1"}></div> */}
      <div className={cx(styles.illustration, "flex-4")}>{illustration}</div>
    </Section>
  )
