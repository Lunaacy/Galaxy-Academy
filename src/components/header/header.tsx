import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
// import TestImage from "@/public/images/header-bg.svg"

const Header = () => {
    return (
        <header className={styles.custom}>
            <nav className={styles.navContent}>
                {/* <Image alt="" src={'../../../public/images/header-bg.svg'} width={400} height={400}/> */}
                {/* <TestImage/> */}
                <ul className={styles.navLinks}>
                    <li>About us</li>
                    <li>Profile</li>
                    <li>Diary</li>

                </ul>
                <div className={styles.authButtons}>
                    <button className={styles.loginBtn}>Log In</button>
                    <button className={styles.signupBtn}>Sign Up</button>
                </div>
            </nav>
        </header>
    )
};

export default Header;