import React from "react"
import { Header, Footer, Jumbotron, Button, Newsletter } from "../components"
import HackingWithRustSvg from "../assets/svgs/hacking-with-rust.svg"
import PairProgramSvg from "../assets/svgs/pair-programming.svg"
import RustExpertsSvg from "../assets/svgs/rust-experts.svg"
import RustLittleSvg from "../assets/svgs/rust-a-little.svg"
import styles from "./index.module.scss"
import "../assets/styles/main.scss"
import { Link } from "gatsby"

export default () => (
  <div className="page">
    <Header type="black" />

    {/* Section 1 */}
    <Jumbotron
      illustration={
        <PairProgramSvg
          style={{
            height: "auto",
            width: "90%",
          }}
        />
      }
      content={
        <div className={styles.content} style={{ color: "white" }}>
          <h1>Learning Rust From The Community</h1>
          <p>A bi-weekly and monthly video cast focused on:</p>
          <ul>
            <li>Teaching Rust basics.</li>
            <li>Disussions on industry best practises.</li>
            <li>Building real-life product and tools in Rust.</li>
            <li>Insightful interviews from Rust community members.</li>
          </ul>

          <Button text="Get Started" />
        </div>
      }
    />

    {/* Section 2 */}
    <Jumbotron
      background="white"
      reverse={true}
      size="large"
      illustration={
        <RustLittleSvg
          style={{
            height: "auto",
            width: "90%",
          }}
        />
      }
      content={
        <div>
          <h1>Rust A Little</h1>
          <p>
            Getting started with Rust can pose itself as a huge challenge,
            especially from an interpreted language background. Join us every 2
            weeks as we guide you through the basics of Rust programming
            language.
          </p>

          <Link to="rust-a-little">
            <Button text="Start Growing" />
          </Link>
        </div>
      }
    />

    {/* Section 3 */}
    <Jumbotron
      background="grayish-gradient"
      size="large"
      illustration={
        <RustExpertsSvg
          style={{
            height: "auto",
            width: "100%",
          }}
        />
      }
      content={
        <div>
          <h1>Monthly Interviews With Rustaceans</h1>
          <p>
            Gather experience from several organizations and individuals using
            Rust in production or side projects, through monthly live
            interviews, straight to your door step.
          </p>

          <Link to="interviews">
            <Button text="Join Us Live" />
          </Link>
        </div>
      }
    />

    {/* Section 4 */}
    <Jumbotron
      background="white"
      reverse={true}
      size="large"
      illustration={
        <HackingWithRustSvg
          style={{
            height: "auto",
            width: "90%",
          }}
        />
      }
      content={
        <div>
          <h1>Hacking With Rust</h1>
          <p>
            It is always emphasized that the best way to master a language, is
            by taking the bold step to build with it. What makes it more
            exciting, is when its built with other people.
          </p>

          <Link to="hacking-with-rust">
            <Button text="Begin Hacking" />
          </Link>
        </div>
      }
    />

    <div
      style={{
        backgroundColor: "rgb(24, 24, 37)", //hsl(240, 22%, 38%)
        textAlign: "center",
      }}
    >
      <Newsletter />
    </div>

    <Footer />
  </div>
)
