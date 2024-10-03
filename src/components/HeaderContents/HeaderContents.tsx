"use client";

import { useState } from "react";
import { HeaderDetail } from "../HeaderDetail/HeaderDetail";
import styles from "./headerContents.module.scss";

export interface HeaderContentsProps {
  isShow: boolean;
  showDetail: number;
  ShowDetail: (number: number) => void;
}

export const HeaderContents = (props: HeaderContentsProps) => {
  const { isShow, showDetail, ShowDetail } = props;
  return (
    <>
      <div
        className={`${styles.slideOutBox} ${!isShow ? styles.slideOut : ""}`}
      >
        <div className={styles.text} onMouseEnter={() => ShowDetail(1)}>
          Profile
        </div>
        <div className={styles.text} onMouseEnter={() => ShowDetail(2)}>
          Career
        </div>
        <div className={styles.text} onMouseEnter={() => ShowDetail(3)}>
          Skill Set
        </div>
        <div className={styles.text} onMouseEnter={() => ShowDetail(4)}>
          Portfolio
        </div>
        <div className={styles.text} onMouseEnter={() => ShowDetail(5)}>
          Links
        </div>
      </div>
      <div className={styles.detailBox}>
        <HeaderDetail isShow={isShow && showDetail === 1} />
        <HeaderDetail isShow={isShow && showDetail === 2} />
        <HeaderDetail isShow={isShow && showDetail === 3} />
        <HeaderDetail isShow={isShow && showDetail === 4} />
        <HeaderDetail isShow={isShow && showDetail === 5} />
      </div>
    </>
  );
};
