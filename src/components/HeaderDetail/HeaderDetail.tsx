"use client";

import { useState } from "react";
import styles from "./headerDetail.module.css";

export interface HeaderDetailProps {}

export const HeaderDetail = () => {
  const [ShowDetail, setShowDetail] = useState(false);
  return (
    <div
      className={styles.text}
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
    >
      Content
    </div>
  );
};
