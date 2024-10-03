"use client";

import style from "./frontContent.module.css";
import { ScrollAnimationComponent } from "../ScrollAnimationComponent";
import { useState } from "react";
import { ImageScatter } from "./imageScatter";

export const Skill = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const images = [
    "/images/pngwing.com (1).png",
    "/images/pngwing.com (2).png",
    "/images/28159.png",
    // 他の画像パス
  ];
  return (
    <div className={style.columnContent}>
      <div
        className={`${style.textContainer} ${isMouseOver ? style.redText : ``}`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onClick={() => console.log("!!!")}
      >
        <ScrollAnimationComponent transform="left">
          <div className={style.title}>Skill→</div>
        </ScrollAnimationComponent>
      </div>
      <div className={`${style.rowContent} ${style.center} ${style.margine}`}>
        <ScrollAnimationComponent transform="right">
          <img src={images[0]} alt={images[0]} className={style.image} />
        </ScrollAnimationComponent>
        <ScrollAnimationComponent transform="right" delay={0.5}>
          <img src={images[1]} alt={images[1]} className={style.image} />
        </ScrollAnimationComponent>
        <ScrollAnimationComponent transform="right" delay={1}>
          <img
            src={images[2]}
            alt={images[2]}
            className={`${style.image} ${style.invert}`}
          />
        </ScrollAnimationComponent>
        <ScrollAnimationComponent transform="right" delay={1.5}>
          <div className={style.image}>AP</div>
        </ScrollAnimationComponent>
        <ScrollAnimationComponent transform="right" delay={2}>
          <div className={style.image}>TOEIC</div>
        </ScrollAnimationComponent>
      </div>
    </div>
  );
};
