import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Button from "../button/page";
import Logo from "@/public/images/svg/logo-en.svg";
import LogoCosmos from "@/public/images/svg/uzcosmos_logo_white.svg";
import ExitIcon from "@/public/images/header/exit-icon.svg";
import Inoman from "@/public/images/header/inoman.svg";
import USA from "@/public/images/header/USA.svg";

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
            <Link href="/">Step to the moon</Link>
          </li>
        </ul>
        <div className={styles.authButtons}>
          <Link href="/profile">
            <Inoman />
          </Link>
          <Link href="/">
            <USA />
          </Link>
          <Link href="/">
            <ExitIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
