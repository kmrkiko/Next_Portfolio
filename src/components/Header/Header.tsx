"use client";

import styles from "./header.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { HeaderContents } from "../HeaderContents/HeaderContents";
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
