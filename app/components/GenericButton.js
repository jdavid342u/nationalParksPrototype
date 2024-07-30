import React from "react";
import Link from 'next/link';
import styles from './GenericButton.module.css'

function GenericButton({ text, color, type, onClickFn }) {
  return <button className={color === "blue" ? styles.buttonBlue : styles.buttonGreen}
                 onClick={onClickFn} type={type}>
            {text}
        </button>;
}

export default GenericButton;
