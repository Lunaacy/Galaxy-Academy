import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Button from '../button/page'

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
            <Button text="Log In" className={styles.loginBtn} />
          </Link>
          <Link href='/signup'>
            <Button text='Sign Up' className={styles.loginBtn}/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
