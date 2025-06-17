import React from "react";
import styles from "./Footer.module.scss";
import { FaTwitter, FaFacebookF, FaMedium, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.column}>
          <p className={styles.quote}>
            Learn To Love Growth And Change And You Will Be A Success.
          </p>
          <div className={styles.socials}>
            <FaTwitter />
            <FaFacebookF />
            <FaMedium />
            <FaYoutube />
          </div>
        </div>

        {/* Middle Column */}
        <div className={styles.column}>
          <ul className={styles.links}>
            <li>Pricing</li>
            <li>Teams</li>
            <li>Education</li>
            <li>Refer a friend</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles.column}>
          <div className={styles.contact}>
            <p>
              <FiMapPin /> 1772 Nevskaya Street NW,<br />
              Suite 21389, Atlanta, GA 902344
            </p>
            <p><FiPhone /> +1789 123456</p>
            <p><FiMail /> hello@containers.kit</p>
          </div>
        </div>

        {/* Subscribe Column */}
        <div className={styles.column}>
          <p>Receive special offers and get our latest updates.</p>
          <form className={styles.subscribeForm}>
            <input type="email" placeholder="Enter e-mail" />
            <button type="submit">JOIN</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
