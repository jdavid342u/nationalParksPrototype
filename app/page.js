'use client';
import Image from "next/image";
import styles from "./page.module.css";
import EntryPageButton from "./components/EntryPageButton";
import Link from 'next/link';

export default function Home() {

  function guestClicked(){
    alert("Login as guest not available at the moment.");
  }

  return (
    <div className={styles.bg}>
      <h1 className={styles.mainTitle}>Discover Colorful Parks</h1>
      <div className={styles.container}>
        <EntryPageButton text="Login" pageRoute="/login"/>
        <EntryPageButton text="Register" pageRoute="/register"/>
        <a className={styles.link} onClick={guestClicked}>Continue as guest</a>
      </div>
    </div>
  );
}
