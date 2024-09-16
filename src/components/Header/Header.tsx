"use client";

import { useState } from "react";
import styles from "./header.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import {
  HeaderContents,
  HeaderContentsProps,
} from "../HeaderContents/HeaderContents";
import { HeaderDetailProps } from "../HeaderDetail/HeaderDetail";
import { useHeaderEvents } from "./useHeaderEvents";

export const Header = () => {
  const { isShowHeader, showDetail, ShowHeader, ShowDetail, HideHeader } =
    useHeaderEvents();
  return (
    <>
      <div
        className={`${styles.header} ${styles.headerBox}`}
        onMouseLeave={() => HideHeader()}
      >
        <div
          className={`${styles.slideOutBox} ${
            isShowHeader ? styles.slideOut : ""
          }`}
          onMouseEnter={() => ShowHeader()}
        >
          <div className={styles.content}>MENU</div>
          <TiArrowSortedDown />
        </div>
        <HeaderContents
          isShow={isShowHeader}
          showDetail={showDetail}
          ShowDetail={ShowDetail}
        />
      </div>
    </>
  );
};
