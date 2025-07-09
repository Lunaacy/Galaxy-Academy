import { Tablet } from "./tablet/Tablet";
import { Container } from "../shared/container/container";
import AstronautHead from "@/public/images/profile/user-view/head/boy-dark.svg";
import AstronautSuit from "@/public/images/profile/user-view/suit/suit_test.svg";
import moonImage from "@/public/images/profile/moon.webp";
import styles from "./Profile.module.scss";
import Image from "next/image";
import Header from '../header/header';
import { Suspense } from "react";

export const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Tablet />
        </Suspense>
      </Container>
      <Image
        src={moonImage}
        width={500}
        height={500}
        alt="moon"
        className={styles.moon}
      />
      <AstronautHead className="w-[160px] h-auto absolute bottom-[488px] left-[140px] z-30" />
      <AstronautSuit className="w-[160px] h-auto absolute bottom-[370px] left-[140px] z-20" />
    </div>
  );
};
