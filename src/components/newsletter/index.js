import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styles from "./newsletter.module.scss"
import Input from "../input"
import cx from "classnames"

export default () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState({ result: "", msg: "" })

  const _handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email)
    setStatus({ result: result.result, msg: `${result.msg.split(". ")[0]}.` })
  }

  if (status.result !== "" && status.result !== "error") {
    return (
      <h4 className={cx(styles.successText, "success")}>
        ✔ Subscription successfull.
      </h4>
    )
  }

  return (
    <form className={styles.former} onSubmit={_handleSubmit}>
      <h3>📬 Subscribe To Our Newsletter</h3>

      {status.result === "error" ? (
        <div className={cx(styles.warningText, "warning")}>{status.msg}</div>
      ) : (
        ""
      )}

      <Input
        type="email"
        size="50"
        placeholder="Please enter your email"
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <button type="submit">Suscribe</button>
    </form>
  )
}
