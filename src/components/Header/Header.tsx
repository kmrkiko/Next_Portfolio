"use client";

import { useState } from "react";
import styles from "./header.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { HeaderContents } from "../HeaderContents/HeaderContents";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className={styles.header}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`${styles.slideOutBox} ${
            isHovered ? styles.slideOut : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
        >
          <div className={styles.content}>MENU</div>
          <TiArrowSortedDown />
        </div>
        <HeaderContents isShow={isHovered} />
      </div>
    </>
  );
};
