"use client";

import styles from "./Cart.module.scss";

interface ICartProps {
  image: React.ReactNode;
  title: string;
  level: number;
}

export const Cart = ({ image, title, level }: ICartProps) => {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => console.log(title)}
    >
      <div className={styles.imeWapper}>{image}</div>
      <div className={styles.contentWrapper}>
        <h3>{title}</h3>
        <span>level: {level}</span>
      </div>
    </button>
  );
};
