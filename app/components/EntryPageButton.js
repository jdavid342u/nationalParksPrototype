import React from "react";
import styles from './EntryPageButton.module.css'
import Link from 'next/link';

function EntryPageButton({ text, pageRoute }) {
  return <Link className={styles.button} href={pageRoute}>{text}</Link>;
}

export default EntryPageButton;
