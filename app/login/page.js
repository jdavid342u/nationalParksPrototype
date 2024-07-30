'use client'
import React, {useState} from 'react'
import styles from './page.module.css'
import GoBackButton from '../components/GoBackButton'
import GenericButton from '../components/GenericButton';
import ATag from '../components/ATag';
import TextBox from '../components/TextBox';
import Link from 'next/link';

export default function page() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  
  const onLoginSubmit = async (e) => {
    e.preventDefault();

    if(!email || !pw){
      alert("Email and password fields are required.\nPlease complete the information and try again.")
      return;
    }

    const res = await fetch(`/api/users?email=${email}&password=${pw}`);
    const data = await res.json();
    if(data.length > 0){
      alert("Login successful.\nAt this point the user would be redirected to homepage.")
    }else{
      alert("Invalid Credentials.")
    }
  }

  function onForgotPwClicked(){
    alert("FPW");
  }

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.backButton}>
          <GoBackButton href="/"/>
        </div>
        <div className={styles.bannerContainer}>
          <h1 className={styles.mainTitle}>Log in now</h1>
          <h2 className={styles.h2}>Please sign in to continue to our app</h2>
          <h3 className={styles.h3}>Lake Louise, Banff National Park</h3>
        </div>
      </div>
      <div>
        <form onSubmit={onLoginSubmit} className={styles.loginForm}>
          <TextBox type="text" id="email" value={email} placeHolder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          <TextBox type='password' id='pw' value={pw} placeHolder="Enter your password" onChange={(e) => setPw(e.target.value)}/>
          <ATag text="Forgot your password?" onClickFn={onForgotPwClicked} />
          <GenericButton text="Login" color="green" type="submit" onClickFn={onLoginSubmit}/>
          <p><span className={styles.smallText}>Don't have an account?</span> <Link href="/register"><ATag text="Register here" onClickFn={() => {}}/></Link></p>
        </form>
      </div>
    </>
  )
}