'use client'
import React from 'react'
import styles from './page.module.css'
import GoBackButton from '../components/GoBackButton'
import { useState } from 'react';
import GenericButton from '../components/GenericButton';
import ATag from '../components/ATag';
import TextBox from '../components/TextBox';
import Link from 'next/link';

export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onRegisterSubmit = async (e) => {
    e.preventDefault();
    
    if(!name || !email || !pw){
      alert("All fields must be filled.\nPlease revise and try again");
      return;
    }

    const response = await fetch(`/api/users?name=${name}&email=${email}&pw=${pw}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, pw }),
    });

    if (response.ok) {
      const result = await response.json();
      setName('');
      setEmail('');
      setPw('');
      alert("User created successfully.\nYou can now login to your account.")
    } else {
      const error = await response.json();
    }
  }

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.backButton}>
          <GoBackButton href="/login"/>
        </div>
        <div className={styles.bannerContainer}>
          <h1 className={styles.mainTitle}>Register now</h1>
          <h2 className={styles.h2}>Create an account with us</h2>
          <h3 className={styles.h3}>Emerald Lake, Banff National Park</h3>
        </div>
      </div>
      <div>
        <form onSubmit={onRegisterSubmit} className={styles.loginForm}>
          <TextBox type="text" id="name" value={name} placeHolder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <TextBox type="text" id="email" value={email} placeHolder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <TextBox type='password' id='pw' value={pw} placeHolder="Enter your password" onChange={(e) => setPw(e.target.value)}/>
          <GenericButton text="Register" color="green" type="submit" onClickFn={onRegisterSubmit}/>
          <p><span className={styles.smallText}>Already have an account?</span> <Link href="/login"><ATag text="Log in" onClickFn={() => {}}/></Link></p>
        </form>
      </div>
    </>
  )
}