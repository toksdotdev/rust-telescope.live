import React from "react"
import { Header, Footer, Jumbotron, Button, Newsletter } from "../../components"
import PairProgramSvg from "../../assets/svgs/pair-programming.svg"
import RustaceansWorldWideSvg from "../..//assets/svgs/rustaceans-around-the-world.svg"
import "../..//assets/styles/main.scss"
import styles from "./index.module.scss"

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
            <li>Teaching Rust.</li>
            <li>Discussing use-cases and practices of Rust.</li>
            <li>
              Encouraging Rustacean with insightful interviews from Rust
              community members.
            </li>
          </ul>

          <Button text="Get Started"></Button>
        </div>
      }
    />

    {/* Section 2 */}
    <Jumbotron
      background="white"
      reverse={true}
      size="large"
      illustration={
        <RustaceansWorldWideSvg
          style={{
            height: "auto",
            width: "90%",
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
            {/* <ul>
              <li>Teaching Rust.</li>
              <li>Discussing use-cases and practices of Rust.</li>
              <li>
                Encouraging Rustacean with insightful interviews from Rust
                community members.
              </li>
            </ul> */}
          </p>
        </div>
      }
    />

    {/* Section 3 */}
    <Jumbotron
      background="red-orange-gradient"
      illustration={
        <RustaceansWorldWideSvg
          style={{
            height: "auto",
            width: "90%",
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
            {/* <ul>
              <li>Teaching Rust.</li>
              <li>Discussing use-cases and practices of Rust.</li>
              <li>
                Encouraging Rustacean with insightful interviews from Rust
                community members.
              </li>
            </ul> */}
          </p>
        </div>
      }
    />

    <div
      style={{
        backgroundColor: " hsl(240, 22%, 38%)",
        textAlign: "center",
      }}
    >
      <Newsletter />
    </div>

    <Footer />
  </div>
)
