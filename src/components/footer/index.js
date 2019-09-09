import React from "react"
import footer from "./footer.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer className={footer.footerDistributed}>
    <div className={footer.footerRight}>
      <Link to="#">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>

      <Link to="https://github.com/TNkemdilim/rust-telescope.live">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>

    <div className={footer.footerLeft}>
      <p className={footer.footerLinks}>
        <Link to="#">Home</Link> · <Link to="/blog">Blog</Link> ·{" "}
        <Link to="#">Rust</Link>
        &nbsp;·&nbsp;
        <a target="_" href="https://users.rust-lang.org/">
          Rust Forum
        </a>
        &nbsp;·&nbsp;
        <a target="_" href="https://reach.rust-lang.org/">
          Rust Reach
        </a>
        &nbsp;·&nbsp;
        <a target="_" href="mailto:nkemdilimtochukwu@gmail.com">
          Contact
        </a>
      </p>

      <p>
        <span role="img" aria-label="telescope">
          🔭
        </span>
        &nbsp;Rust Telescope &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)
