import React from 'react'
import styles from './ATag.module.css'

function ATag({text, onClickFn}) {
  return (
    <a className={styles.aTag} onClick={onClickFn}>{text}</a>
  )
}

export default ATag