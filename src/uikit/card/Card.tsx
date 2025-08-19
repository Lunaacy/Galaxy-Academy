'use client';

import { ElementType } from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';
import LockIcon from '@/public/images/profile/mission/svg/lock.svg';

interface ICardProps {
  image: ElementType;
  title: string;
  id: number | string;       // identifier for the mission/card
  status: boolean;           // whether it’s active/unlocked
  subtitle?: string;         // optional label (e.g., "Level 3")
  onClick: () => void;       // action handler
}

export const Card = ({
  image: Icon,
  title,
  id,
  status,
  subtitle,
  onClick,
}: ICardProps) => {
  return (
    <button
      type="button"
      className={cn(styles.btn, { [styles.activeBtn]: status })}
      onClick={onClick}
      disabled={!status}
    >
      <div className={cn(styles.imgWapper, { [styles.activeImgWrapper]: status })}>
        <Icon className={cn(styles.icon, styles.active)} />
        {!status && <LockIcon className="absolute h-auto w-[40%]" />}
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.level}>{subtitle || `ID: ${id}`}</span>
      </div>
    </button>
  );
};
