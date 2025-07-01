import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.custom}>
      <nav className={styles.navContent}>
        <ul className={styles.navLinks}>
          <li>About us</li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
          <li>Diary</li>
        </ul>
        <div className={styles.authButtons}>
          <Link href='/login'>
            <button className={styles.loginBtn}>Log In</button>
          </Link>
          <Link href='/signup'>
            <button className={styles.signupBtn}>Sign Up</button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
