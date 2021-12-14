import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import style from "../styles/style.module.css";
import form from "../styles/Form.module.css";
import register from "../public/register.png";
import signin from "../public/signin.png";
import Link from "next/link";
//import { signIn, signOut } from 'next-auth/client/_utils';
import {signIn, signOut, useSession} from 'next-auth/react';

export default function Home() {
  const { data: session , status: Loading} = useSession();
  console.log (session, Loading)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <div className={styles.signin}>
        { session==null ? (
                <li className={styles.inline}>
                <Link href="/api/auth/signin"><a  onClick={e=>
               e.preventDefault(signIn('github')
               ) } >Sign in with GitHub</a></Link>
              </li>
              )
         
          
          :
          (<li className={styles.inline}>
            <Link href="/api/auth/signout"><a  onClick={e=>
           e.preventDefault(signOut(github)
           ) } >Sign OUT from gitHub</a></Link>
          </li>)}
         
          <li className={styles.inline}>
            <Link href="signin"><a >Sign in</a></Link>
          </li>
          <li className={styles.inline}>
            <Link href="/register"><a>
              Register</a></Link>
          </li>
        </div>
        <navigator>
          <span style={{ backgroundColor: "#333" }}>
            <a href="#home" className={styles.logo}>
              <div className={styles.left}></div>
              <div className={styles.right}></div>
            </a>
          </span>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="#home">Home</a>
            </li>
            <li className={styles.li}>
              <a href="#aboutus">About us</a>
            </li>
            <li className={styles.li}>
              <a href="#contact">Contact us</a>
            </li>
            <li className={styles.li} style={{ float: "right" }}>
              <div className={styles.dot} href="#about">
                Ar
              </div>
            </li>
          </ul>
        </navigator>
      </Head>
       
          <div className={form.box}>
            <div className={form.Sbox}>
              <div className={form.Rbox}>
                <Image
                  className={form.register}
                  src={register}
                  alt="register"
                />
                <h4> Register </h4>
                <p className={form.p}> Browse and find what you need</p>
              </div>
              <div className={form.lv}></div>
              <div className={form.Lbox}>
                <Image className={form.signin} src={signin} alt="signin" />
                <h4> Sign in </h4>
                <p className={form.p}> Already have an account then welcome back.</p>
              </div>
            </div>
          </div>
          <form className={form.form}>
          <input className={form.input} type="text" placeholder="Email*" />
          <input
            className={form.input}
            type="password"
            placeholder="Password*"
          />
          <input className={form.submit} type="submit" value={"Submit"} />
        </form>
      </main>

      <footer className={styles.footer}>
        <span className="{styles.containere}">
          <div className={style.left} style={{ marginTop: "10px" }}></div>
          <div className={style.right} style={{ marginTop: "40px" }}></div>
        </span>
        <p> © All Rights Reserved</p>
      </footer>
    </div>
  );
}
