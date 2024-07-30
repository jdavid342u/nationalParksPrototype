import React from 'react'
import styles from './TextBox.module.css'

function TextBox({type, id, value, placeHolder, onChange}) {
  return (
    <input className={styles.textBox}
            type={type} id={id} value={value}
            onChange={onChange} placeholder={placeHolder}/>
  )
}

export default TextBox