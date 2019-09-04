import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { shortMonth } from "./utils/date"
import styles from "./card.module.scss"
import { Link } from "gatsby"
import cx from "classnames"

export default ({
  title,
  creator,
  url,
  image,
  description = "",
  date = Date.now(),
  totalComments = 0,
  buttonText = "Read more",
  showTotalComments = true,
}) => {
  const dateCreated = new Date(date)

  return (
    <div className={cx(styles.card, styles.example)}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.header}>
          <div className={styles.date}>
            <span className={styles.day}>{dateCreated.getDay()}</span>&nbsp;
            <span className={styles.month}>
              {shortMonth(dateCreated.getMonth())}
            </span>
            &nbsp;
            <span className={styles.year}>{dateCreated.getFullYear()}</span>
            &nbsp;
          </div>

          {showTotalComments === true ? (
            <ul className={styles.menuContent}>
              <li>
                <FontAwesomeIcon icon={faComment} />
                <span>{totalComments}</span>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>

        <div className={styles.data}>
          <div className={styles.content}>
            <span className={styles.creator}>{creator}</span>

            <h1 className={styles.title}>
              <Link to={url}>{title}</Link>
            </h1>

            <p className={styles.text}>
              {description.length <= 120
                ? description
                : `${description.substring(0, 128)}...`}
            </p>

            <Link to={url} className={styles.button}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
