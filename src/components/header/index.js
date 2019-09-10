import React, { useState } from "react"
import styles from "./header.module.scss"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import cx from "classnames"

export default ({ type }) => {
  const [toggle, switchToggle] = useState(false)

  return (
    <nav className={cx(styles.nav, { section: true, [`${type}-bg`]: true })}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          <h2>
            <span role="img" aria-label="telescope">
              🔭
            </span>
            &nbsp;Rust Telescope
          </h2>
        </Link>

        <FontAwesomeIcon
          icon={faBars}
          onClick={() => switchToggle(!toggle)}
          className={cx(styles.navToggle)}
        />
      </div>

      <div className={styles.middle}></div>

      <div className={cx(styles.right, toggle === true ? styles.toggled : "")}>
        <Link to="/interviews" className={styles.link}>
          Interviews
        </Link>

        <Link to="/rust-a-little" className={styles.link}>
          Rust a Little
        </Link>

        <Link to="/hacking-with-rust" className={styles.link}>
          Hacking With Rust
        </Link>

        <Link to="/blog" className={styles.link}>
          Blog
        </Link>

        <a
          target="_"
          href="https://www.patreon.com/rust_telescope"
          className={cx(styles.link, styles.patreon)}
        >
          Sponsor Us
        </a>
      </div>
    </nav>
  )
}
