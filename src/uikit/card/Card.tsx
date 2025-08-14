'use client';

import { ElementType } from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';
import LockIcon from '@/public/images/profile/mission/svg/lock.svg';

interface ICartProps {
  image: ElementType;
  title: string;
  level: number;
  status: boolean;
  gameLink: string;
  onClick: (value: boolean) => void;
  setActiveMission: (level: number) => void;
}

export const Card = ({ image, title, level, status, setActiveMission }: ICartProps) => {
  const Icon = image;

  return (
    <button
      type="button"
      className={cn(styles.btn, { [styles.activeBtn]: status })}
      onClick={() => {
        setActiveMission(level);
      }}
      disabled={!status}
    >
      <div className={cn(styles.imgWapper, { [styles.activeImgWrapper]: status })}>
        <Icon className={cn(styles.icon, styles.active)} />
        {!status && <LockIcon className="absolute h-auto w-[40%]" />}
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.level}>level: {level}</span>
      </div>
    </button>
  );
};
