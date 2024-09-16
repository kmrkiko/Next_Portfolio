"use client";

import { useState } from "react";
import { HeaderDetail } from "../HeaderDetail/HeaderDetail";
import styles from "./headerContents.module.scss";

export interface HeaderContentsProps {
  isShow: boolean;
}

export const HeaderContents = (props: HeaderContentsProps) => {
  const { isShow } = props;
  const [showDetail, setShowDetail] = useState(0);
  return (
    <>
      <div
        className={`${styles.slideOutBox} ${!isShow ? styles.slideOut : ""}`}
      >
        <div onMouseEnter={() => setShowDetail(1)}>Contents</div>
        <div onMouseEnter={() => setShowDetail(2)}>Contents</div>
        <div onMouseEnter={() => setShowDetail(3)}>Contents</div>
        <div onMouseEnter={() => setShowDetail(4)}>Contents</div>
        <div onMouseEnter={() => setShowDetail(5)}>Contents</div>
      </div>
      {/* <div>
        <HeaderContents isShow={showDetail === 1} />
        <HeaderContents isShow={showDetail === 2} />
        <HeaderContents isShow={showDetail === 3} />
        <HeaderContents isShow={showDetail === 4} />
        <HeaderContents isShow={showDetail === 5} />
      </div> */}
    </>
  );
};
