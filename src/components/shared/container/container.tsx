import React, { JSX } from "react";
import cn from "classnames";
import styles from "./container.module.scss";

interface IContainerProps {
  children: JSX.Element;
  className?: string;
}

export const Container = ({ children, className }: IContainerProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
