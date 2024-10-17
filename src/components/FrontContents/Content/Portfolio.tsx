"use client";

import style from "./frontContent.module.css";
import { ScrollAnimationComponent } from "../ScrollAnimationComponent";
import { useState } from "react";
import { usePageStateStore } from "@/app/pageStateStore";

export const Portfolio = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const pageStateStore = usePageStateStore();
  const images = [
    "/images/video1.png",
    "/images/ar.drawio (1).png",
    "/images/video1.png",
    "/images/unr.png",
    // 他の画像パス
  ];
  return (
    <div className={style.columnContent}>
      <div
        className={`${style.textContainer} ${isMouseOver ? style.redText : ``}`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onClick={() => pageStateStore.setPageState("profile")}
      >
        <ScrollAnimationComponent transform="left">
          <div className={style.title}>Portfolio→</div>
        </ScrollAnimationComponent>
      </div>
      <div className={`${style.gridContent} ${style.center} ${style.margine}`}>
        <ScrollAnimationComponent transform="right">
          <img
            src={images[0]}
            alt={images[0]}
            className={`${style.portfolio} ${style.leftMargine}`}
          />
        </ScrollAnimationComponent>
        <ScrollAnimationComponent transform="right" delay={0.5}>
          <img
            src={images[1]}
            alt={images[1]}
            className={`${style.portfolio} ${style.leftMargine}`}
          />
        </ScrollAnimationComponent>
        <ScrollAnimationComponent transform="right">
          <img
            src={images[2]}
            alt={images[2]}
            className={`${style.portfolio} ${style.leftMargine}`}
          />
        </ScrollAnimationComponent>{" "}
        <ScrollAnimationComponent transform="right" delay={0.5}>
          <img
            src={images[3]}
            alt={images[3]}
            className={`${style.portfolio} ${style.leftMargine}`}
          />
        </ScrollAnimationComponent>
      </div>
    </div>
  );
};
