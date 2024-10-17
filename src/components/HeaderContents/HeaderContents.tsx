"use client";

import { useState } from "react";
import { HeaderDetail } from "../HeaderDetail/HeaderDetail";
import styles from "./headerContents.module.scss";
import { pageTypes } from "@/app/pageStateStore";
import { ContentsList } from "../../../public/Contents/data";
import { HeaderLinks } from "../HeaderDetail/HeaderLinks";

export interface HeaderContentsProps {
  isShow: boolean;
  showDetail: number;
  ShowDetail: (number: number) => void;
  onClickContent: (type: pageTypes, index?: number) => void;
  ContentsList: ContentsList;
}

export const HeaderContents = (props: HeaderContentsProps) => {
  const { isShow, showDetail, ShowDetail, onClickContent, ContentsList } =
    props;
  return (
    <>
      <div
        className={`${styles.slideOutBox} ${!isShow ? styles.slideOut : ""}`}
      >
        <div
          className={styles.text}
          onMouseEnter={() => ShowDetail(1)}
          onClick={() => onClickContent("profile")}
        >
          Profile
        </div>
        <div
          className={styles.text}
          onMouseEnter={() => ShowDetail(2)}
          onClick={() => onClickContent("career")}
        >
          Career
        </div>
        <div
          className={styles.text}
          onMouseEnter={() => ShowDetail(3)}
          onClick={() => onClickContent("skill")}
        >
          Skill Set
        </div>
        <div
          className={styles.text}
          onMouseEnter={() => ShowDetail(4)}
          onClick={() => onClickContent("portfolio")}
        >
          Portfolio
        </div>
        <div className={styles.text} onMouseEnter={() => ShowDetail(5)}>
          Links
        </div>
      </div>
      <div className={styles.detailBox}>
        <HeaderDetail
          isShow={isShow && showDetail === 1}
          pageType="profile"
          onClickContent={onClickContent}
          contents={ContentsList["profile"]}
        />
        <HeaderDetail
          isShow={isShow && showDetail === 2}
          pageType="career"
          onClickContent={onClickContent}
          contents={ContentsList["career"]}
        />
        <HeaderDetail
          isShow={isShow && showDetail === 3}
          pageType="skill"
          onClickContent={onClickContent}
          contents={ContentsList["skill"]}
        />
        <HeaderDetail
          isShow={isShow && showDetail === 4}
          pageType="portfolio"
          onClickContent={onClickContent}
          contents={ContentsList["portfolio"]}
        />
        <HeaderLinks isShow={isShow && showDetail === 5} />
      </div>
    </>
  );
};
