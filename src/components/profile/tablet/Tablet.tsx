'use client'

import { Cart } from '@/src/uikit/cart/Cart'
import Image from 'next/image'
import styles from './Tablet.module.scss'
import EarthIcon from '@/public/images/svg/earth.svg'
import SunhIcon from '@/public/images/svg/sun.svg'
import HumanIcon from '@/public/images/svg/human.svg'
import HomeIcon from '@/public/images/svg/home.svg'
import tabletBg from '@/public/images/profile/tablet_view.webp'
import React, { useEffect, useState } from 'react'
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'

const items = [
  {
    id: 0,
    icon: <EarthIcon />,
    title: 'Mission earth',
    level: 1,
    description:
      'This is a description for mission sun at level 1. It provides additional context and details about the mission.',
  },
  {
    id: 1,
    icon: <SunhIcon />,
    title: 'Mission sun',
    level: 2,
    description:
      'This is a description for mission sun at level 2. It provides additional context and details about the mission.',
  },
  {
    id: 2,
    icon: <EarthIcon />,
    title: 'Mission earth',
    level: 3,
    description:
      'This is a description for mission sun at level 3. It provides additional context and details about the mission.',
  },
  {
    id: 3,
    icon: <SunhIcon />,
    title: 'Mission sun',
    level: 4,
    description:
      'This is a description for mission sun at level 4. It provides additional context and details about the mission.',
  },
  {
    id: 4,
    icon: <EarthIcon />,
    title: 'Mission earth',
    level: 5,
    description:
      'This is a description for mission sun at level 5. It provides additional context and details about the mission.',
  },
  {
    id: 5,
    icon: <SunhIcon />,
    title: 'Mission sun',
    level: 6,
    description:
      'This is a description for mission sun at level 6. It provides additional context and details about the mission.',
  },
]

export const Tablet = () => {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    console.log('activeTab', activeTab)
  }, [activeTab])

  return (
    <div className={styles.tablet}>
      <Root value={activeTab} onValueChange={(value) => setActiveTab(value)}>
        <Content tabIndex={undefined} value='home'>
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
        <Content tabIndex={undefined} value='human'>
          <div className={styles.contenWrapper}>
            <p className={styles.profileTitle}>Profile</p>
          </div>
        </Content>
        <div>
          <List className={styles.tabletBtnWrapper}>
            <Trigger className={styles.tabletBtn} value='home'>
              <HomeIcon className={styles.btnIcon} />
            </Trigger>
            <Trigger className={styles.tabletBtn} value='human'>
              <HumanIcon className={styles.btnIcon} />
            </Trigger>
          </List>
        </div>
        <Image
          src={tabletBg}
          alt=''
          fill
          className={styles.bgImage}
          quality={100}
        />
      </Root>
    </div>
  )
}
