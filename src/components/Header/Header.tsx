"use client";

import styles from "./header.module.scss";
import { TiArrowSortedDown, TiHome } from "react-icons/ti";
import { HeaderContents } from "../HeaderContents/HeaderContents";
import { useHeaderEvents } from "./useHeaderEvents";
import { ContentsList } from "../Detail/DetailContent/data";

export const Header = () => {
  const {
    isShowHeader,
    showDetail,
    ShowHeader,
    ShowDetail,
    HideHeader,
    pageState,
    onClickContent,
  } = useHeaderEvents();
  return (
    <>
      <div
        className={`${styles.header} ${styles.headerBox}`}
        onMouseLeave={() => HideHeader()}
      >
        {pageState !== "front" && (
          <div
            className={styles.homeIcon}
            onClick={() => onClickContent("front")}
          >
            <TiHome />
          </div>
        )}
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
          onClickContent={onClickContent}
          ContentsList={ContentsList}
        />
      </div>
    </>
  );
};
