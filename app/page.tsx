import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/images/home-page/s1-bg.svg")' }}
      >
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0B1120] backdrop-blur-md"></div>
      </section>

      {/* ABOUT US Section */}
      <section className="aboutUs relative bg-[#0B1120] py-[120px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-[80px]">
          
          {/* Text Side */}
          <div className="flex-1">
            <h2 className={`text-6xl font-extrabold ${styles.aboutTitle}`}>
              ABOUT US
            </h2>
            <h3 className={`text-3xl font-medium ${styles.aboutSubtitle}`}>
              GALAXY ACADEMY
            </h3>

            <div className={styles.aboutText}>
              <p className="flex justify-start">IT IS AN INTERACTIVE PLATFORM,</p>
              <p className="flex justify-end">WHERE WE EXPLORE SPACE,</p>
              <p className="flex justify-start">WE SOLVE EXCITING PROBLEMS,</p>
              <p className="flex justify-end">WE BUILD ROCKETS AND INTRODUCE</p>
            </div>

            <button className={styles.aboutButton}>
              SIGN UP
            </button>
          </div>

          {/* Image Side */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/home-page/tablet.svg"
              alt="Tablet"
              className={styles.tabletImage}
            />
          </div>
        </div>

        {/* Background Decorative Image */}
        <img
          src="/images/home-page/aboutUs-bg.svg"
          className="absolute top-0 left-0 opacity-20 pointer-events-none"
          alt=""
        />
      </section>
    </main>
  );
}
