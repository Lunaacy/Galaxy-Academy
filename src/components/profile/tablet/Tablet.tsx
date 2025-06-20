"use client";

import { Cart } from "@/src/uikit/cart/Cart";
import Image from "next/image";
import styles from "./Tablet.module.scss";
import EarthIcon from "@/public/images/svg/earth.svg";
import SunhIcon from "@/public/images/svg/sun.svg";
import HumanIcon from "@/public/images/svg/human.svg";
import HomeIcon from "@/public/images/svg/home.svg";
import tabletBg from "@/public/images/profile/tablet_view.webp";
import React, { useEffect, useState } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";

const items = [
  {
    id: 0,
    icon: <EarthIcon />,
    title: "earth",
    level: 1,
  },
  {
    id: 1,
    icon: <SunhIcon />,
    title: "sun",
    level: 2,
  },
  {
    id: 2,
    icon: <EarthIcon />,
    title: "earth",
    level: 3,
  },
  {
    id: 3,
    icon: <SunhIcon />,
    title: "sun",
    level: 4,
  },
];

export const Tablet = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    console.log("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className={styles.tablet}>
      <Root value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        {/* {children} */}
        <Content tabIndex={undefined} value="home">
          <div className={styles.contenWrapper}>
            <ul className={styles.tabletList}>
              {items.map((item) => (
                <li key={item.id} className={styles.tabletItem}>
                  <Cart
                    image={item.icon}
                    title={item.title}
                    level={item.level}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Content>
        <Content tabIndex={undefined} value="human">
          <div className={styles.contenWrapper}>
            <p className={styles.profileTitle}>Profile</p>
          </div>
        </Content>
        <div>
          <List className={styles.tabletBtnWrapper}>
            <Trigger className={styles.tabletBtn} value="home">
              <HomeIcon className={styles.btnIcon} />
            </Trigger>
            <Trigger className={styles.tabletBtn} value="human">
              <HumanIcon className={styles.btnIcon} />
            </Trigger>
          </List>

          {/* <button
            type="button"
            className={styles.tabletBtn}
            onClick={() => console.log("home")}
          >
            <HomeIcon className={styles.btnIcon} />
          </button>
          <button
            type="button"
            className={styles.tabletBtn}
            onClick={() => console.log("profile")}
          >
            <HumanIcon className={styles.btnIcon} />
          </button> */}
        </div>
        <Image
          src={tabletBg}
          alt=""
          fill
          className={styles.bgImage}
          quality={100}
        />
      </Root>
    </div>
  );
};
