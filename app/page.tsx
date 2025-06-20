import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer/footer";
import Head from "next/head";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}
