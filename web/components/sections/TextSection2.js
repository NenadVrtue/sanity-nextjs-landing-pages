import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection2.module.css'

function TextSection2(props) {
  const {heading, label, text} = props

  return (
    <div className={styles.root}>
      <section className={styles.article}>
        <div className={styles.label}>{label} 2</div>
        <h2 className={styles.heading}>{heading} </h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  )
}

TextSection2.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection2
