"use client";

import { HeaderDetail } from "../HeaderDetail/HeaderDetail";
import styles from "./headerContents.module.css";

export interface HeaderContentsProps {
  isShow: boolean;
}

export const HeaderContents = (props: HeaderContentsProps) => {
  const { isShow } = props;
  return (
    <div className={`${styles.slideOutBox} ${!isShow ? styles.slideOut : ""}`}>
      <HeaderDetail />
      <HeaderDetail />
      <HeaderDetail />
      <HeaderDetail />
      <HeaderDetail />
    </div>
  );
};
