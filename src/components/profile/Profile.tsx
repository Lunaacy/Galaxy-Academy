import { Tablet } from "./tablet/Tablet";
import { Container } from "../shared/container/container";
import AstronautHead from "@/public/images/profile/user-view/head/boy-dark.svg";
import AstronautSuit from "@/public/images/profile/user-view/suit/suit_blue.svg";
import MoonImage from "@/public/images/profile/svg/planet_profile.png";
import styles from "./Profile.module.scss";
import Image from "next/image";
import Header from '../header/header';

export const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Container>
          <Tablet />
      </Container>
      <Image
        src={MoonImage}
        width={500}
        height={500}
        alt="moon"
        className={styles.moon}
      />
      <AstronautHead className="w-[260px] h-auto absolute bottom-[561px] left-[140px] z-30" />
      <AstronautSuit className="w-[260px] h-auto absolute bottom-[370px] left-[140px] z-20" />
    </div>
  );
};
