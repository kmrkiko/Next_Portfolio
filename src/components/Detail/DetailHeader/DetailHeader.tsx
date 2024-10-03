"use client";

import React, { useState } from "react";
import { useDrag } from "@use-gesture/react";
import style from "./DetailHeader.module.css";

export interface DetailHeaderProps {
  ContentList: string[];
}

export const DetailHeader = (props: DetailHeaderProps) => {
  const { ContentList } = props;
  const [index, setIndex] = useState(0);

  return (
    <div className={style.carousel}>
      {ContentList.map((item, i) => (
        <div
          key={i}
          className={style.carouselItem}
          style={{
            transform: `translate(${
              i >= index
                ? (i - index) * 20 * (ContentList.length + 1)
                : (i - index + ContentList.length) *
                  20 *
                  (ContentList.length + 1)
            }%, 0%)`,
            width: `${100 / ContentList.length}%`,
          }}
          onClick={() => setIndex(i)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
