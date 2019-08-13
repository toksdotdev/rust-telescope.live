import React from "react"
import footer from "./footer.module.scss"
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
      <a href="#">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>

    <div className={footer.footerLeft}>
      <p className={footer.footerLinks}>
        <a href="#">Home</a> · <a href="/blog">Blog</a> · <a href="#">Rust</a>
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

      <p>🔭 Rust Telescope &copy; {new Date().getFullYear()}</p>
    </div>
  </footer>
)
