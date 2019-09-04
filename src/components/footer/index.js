import React from "react"
import footer from "./footer.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

export default () => (
  <footer className={footer.footerDistributed}>
    <div className={footer.footerRight}>
      <Link to="#">
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link to="#">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link to="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link to="#">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </div>

    <div className={footer.footerLeft}>
      <p className={footer.footerLinks}>
        <Link to="#">Home</Link> · <Link to="/blog">Blog</Link> ·{" "}
        <Link to="#">Rust</Link>
        &nbsp;·&nbsp;
        <Link target="_" to="https://users.rust-lang.org/">
          Rust Forum
        </Link>
        &nbsp;·&nbsp;
        <Link target="_" to="https://reach.rust-lang.org/">
          Rust Reach
        </Link>
        &nbsp;·&nbsp;
        <Link target="_" to="mailto:nkemdilimtochukwu@gmail.com">
          Contact
        </Link>
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
