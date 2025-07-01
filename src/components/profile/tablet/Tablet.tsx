"use client";

import { Cart } from "@/src/uikit/cart/Cart";
import Image from "next/image";
import styles from "./Tablet.module.scss";
import tabletBg from "@/public/images/profile/tablet_view.webp";
import React, { useState } from "react";
import { Root, List, Trigger, Content } from "@radix-ui/react-tabs";
import { tabletButtons } from "./tabletButtons/tabletButtons";
import { Book } from "./book/Book";
import { missionData } from "../../utils/missionData";
import CloseBtn from '@/public/images/svg/closeBtn.svg'
import { useRouter, useSearchParams } from "next/navigation";
import Test from '../test/test';
import Leaderboard from '../leaderboard/leaderboard';


export const Tablet = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const activeTabParam = searchParams.get('activeTab')
  const isGameOpenParam = searchParams.get('isOpenGame')

  const [activeTab, setActiveTab] = useState(activeTabParam || "mission");
  const [gameLink, setGameLink] = useState('')
  const [isGameOpen, setIsGameOpen] = useState((isGameOpenParam && gameLink) || false);

  const handleSetActiveParam = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('activeTab', value)
    router.replace(`/profile?${params.toString()}`, { scroll: false })
    setActiveTab(value)
  }

  const handleCloseGame = () => {
    setIsGameOpen(false)
    const params = new URLSearchParams(searchParams.toString())
    params.delete('activeTab')
    params.delete('isOpenGame')
  }

  return (
    <>
      {isGameOpen ? (
        <div className={`ml-auto p-[20px] w-[1100px] h-[683px]`}>
          <button type="button" className="absolute top-[20px] right-[60px]" onClick={() => setIsGameOpen(false)}><CloseBtn className='w-[50px] h-auto' /></button>
          <iframe
            src={gameLink}
            className="w-full h-full border-none"
            allowFullScreen
          />
        </div>
      ) :
        (
          <div className={styles.tablet}>
            <Root
              value={activeTab}
              onValueChange={(value) => handleSetActiveParam(value)}
            >
              <Content tabIndex={undefined} value="mission">
                <div className={styles.contenWrapper}>
                  <ul className={styles.tabletList}>
                    {missionData.map((item) => (
                      <li key={item.id} className={styles.tabletItem}>
                        <Cart
                          gameLink={item.gameLink}
                          setGameLink={setGameLink}
                          onClick={setIsGameOpen}
                          status={item.isAtive}
                          image={item.icon}
                          title={item.title}
                          level={item.level}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </Content>
              <Content tabIndex={undefined} value="profile">
                <div className={styles.contenWrapper}>
                  <p className={styles.profileTitle}>Profile</p>
                </div>
              </Content>
              <Content value="diary">
                <Book />
              </Content>
              <Content value="test">
                <Test />
              </Content>
              <Content value="leader"> 
                <Leaderboard />
              </Content>
              <div>
                <List className={styles.tabletBtnWrapper}>
                  {tabletButtons.map((item) => {

                    const Icon = item.icon;
                    const ActiveIcon = item.activeIcon

                    return (
                      <Trigger
                        key={item.id}
                        className={styles.tabletBtn}
                        value={item.title.toLowerCase()}
                      >
                        {activeTab === item.title ? (
                          <ActiveIcon className={styles.icon} />
                        ) : (
                          <Icon className={styles.icon} />
                        )}
                      </Trigger>
                    )
                  })}
                </List>
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
        )}
    </>
  );
};
