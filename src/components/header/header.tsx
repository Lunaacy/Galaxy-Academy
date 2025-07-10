import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Button from '../button/page'

const Header = () => {
  return (
    <header className={styles.custom}>
      <nav className={styles.navContent}>
        <ul className={styles.navLinks}>
          <li>
            <Link href='/'>Home Page</Link>
          </li>
          <li>
            <Link href='/profile'>Profile</Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <Link href='/login' className='p-[0.5rem_2.5rem] border-2 rounded-[8px] border-[#A095E3] text-[#A095E3] font-medium'> Log In </Link>
          <Link href='/signup'>
            <Button text='Sign Up' className={styles.loginBtn}/>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
