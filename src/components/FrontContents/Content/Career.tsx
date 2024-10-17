"use client";

import style from "./frontContent.module.css";
import { ScrollAnimationComponent } from "../ScrollAnimationComponent";
import { useState } from "react";
import { ImageScatter } from "./imageScatter";
import { usePageStateStore } from "@/app/pageStateStore";

export const Career = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const pageStateStore = usePageStateStore();
  const images = [
    "images/IMG_4797.JPG",
    "/images/a.png",
    "/images/syuukatsu.png",
    "/images/leader.png",
    // 他の画像パス
  ];
  return (
    <div className={style.rowContent}>
      <div className={style.imageContainer}>
        <ScrollAnimationComponent transform="scale">
          <ImageScatter images={images} />
        </ScrollAnimationComponent>
      </div>
      <div
        className={`${style.textContainer} ${isMouseOver ? style.redText : ``}`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onClick={() => pageStateStore.setPageState("career")}
      >
        <ScrollAnimationComponent transform="left">
          <div className={style.title}>Career→</div>
        </ScrollAnimationComponent>
        <div className={style.description}>
          <ScrollAnimationComponent transform="left" delay={0.1}>
            学歴
          </ScrollAnimationComponent>
          <ScrollAnimationComponent transform="left" delay={0.2}>
            職歴
          </ScrollAnimationComponent>
          <ScrollAnimationComponent transform="left" delay={0.3}>
            経験
          </ScrollAnimationComponent>
          <ScrollAnimationComponent transform="left" delay={0.4}>
            ...
          </ScrollAnimationComponent>
        </div>
      </div>
    </div>
  );
};
