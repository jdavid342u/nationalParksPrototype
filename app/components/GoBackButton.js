import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './GoBackButton.module.css';

const GoBackButton = ({ href })  => {
  return (
    <Link className={styles.circle} href={href} passHref>
        <span className={styles.leftArrow}>{"<"}</span>
    </Link>
  )
}

export default GoBackButton