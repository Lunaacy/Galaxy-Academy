"use client";

import { ElementType } from "react";
import styles from "./Card.module.scss";
import cn from 'classnames'

interface ICartProps {
  image: ElementType;
  title: string;
  level: number;
  status: boolean;
  gameLink: string;
  onClick: (value: boolean) => void;
  setGameLink: (gameLink: string) => void;
}

export const Card = ({ image, title, level, status, gameLink, setGameLink, onClick }: ICartProps) => {

  const Icon = image

  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => {
        setGameLink(gameLink);
        onClick(true)
      }}
      disabled={!status}
    >
      <div className={styles.imgWapper}>
        <Icon className={cn(styles.icon, { [styles.active]: status })} />
      </div>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.level}>level: {level}</span>
      </div>
    </button>
  );
};
