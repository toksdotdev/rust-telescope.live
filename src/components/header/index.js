import React from "react"
import styles from "./header.module.scss"
import { Link } from "gatsby"
import cx from "classnames"

export default ({ type }) => (
  <nav className={cx(styles.nav, { container: true, [`${type}-bg`]: true })}>
    <div className={styles.left}>
      <h2>🔭 Rust Telescope</h2>
    </div>

    <div className={styles.middle}></div>

    <div className={styles.right}>
      <Link to="#" className={styles.link}>
        Interviews
      </Link>

      <Link to="#" className={styles.link}>
        Rust a Little
      </Link>

      <Link to="#" className={styles.link}>
        Hacking With Rust
      </Link>

      <Link to="#" className={styles.link}>
        Blog
      </Link>

      <Link to="#" className={styles.link}>
        Sponsor Us
      </Link>
    </div>
  </nav>
)
