import React, { useState } from "react"
import styles from "./header.module.scss"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Icon from "../../assets/svgs/icon.svg"
import cx from "classnames"

export default ({ type }) => {
  const [toggle, switchToggle] = useState(true)

  return (
    <nav className={cx(styles.nav, { section: true, [`${type}-bg`]: true })}>
      <div className={styles.left}>
        <Link to="/" className={styles.brand}>
          <h2>
            <Icon
              style={{
                width: "24px",
              }}
            />
            &nbsp;Rust Telescope
          </h2>
        </Link>

        <FontAwesomeIcon
          icon={toggle === true ? faBars : faTimes}
          onClick={() => switchToggle(!toggle)}
          className={cx(styles.navToggle)}
        />
      </div>

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
