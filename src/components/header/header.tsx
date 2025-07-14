import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Button from "../button/page";
import Logo from "@/public/images/svg/logo-en.svg";
import LogoCosmos from "@/public/images/svg/uzcosmos_logo_white.svg";

const Header = () => {
  return (
    <header className={styles.custom}>
      <nav className={styles.navContent}>
        <div className="flex items-center justify-between gap-10">
          <Link href="/">
            <Logo className="h-[30px] w-auto" />
          </Link>
          <Link href="https://uzspace.uz/ru" target="_blank">
            <LogoCosmos className="h-[55px] w-auto" />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <Link
            href="/login"
            className="p-[0.5rem_2.5rem] border-2 rounded-[8px] border-[#A095E3] text-[#A095E3] font-medium"
          >
            {" "}
            Log In{" "}
          </Link>
          <Link href="/signup">
            <Button text="Sign Up" className={styles.loginBtn} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
