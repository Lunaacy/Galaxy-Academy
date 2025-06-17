import styles from "./page.module.css";
import Header from "../src/components/header/Header";
import Footer from "@/src/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        {/* Your content here */}
        <h1>Welcome to Galaxy Academy</h1>
      </main>
      <Footer />
    </div>
  );
}
