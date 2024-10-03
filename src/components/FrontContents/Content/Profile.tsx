"use client";

import style from "./frontContent.module.css";
import { ScrollAnimationComponent } from "../ScrollAnimationComponent";
import { useState } from "react";
import { ImageScatter } from "./imageScatter";

export const Profile = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const images = [
    "images/333a9a031ebdd7acae826f2e307c3277.png",
    "/images/12538_color.png",
    "/images/kkrn_icon_game_1.png",
    "/images/live_music_ouen_woman.png",
    "/images/IMG_0109.jpg",
    // 他の画像パス
  ];
  return (
    <div className={style.rowContent}>
      <div
        className={`${style.textContainer} ${isMouseOver ? style.redText : ``}`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onClick={() => console.log("!!!")}
      >
        <ScrollAnimationComponent transform="right">
          <div className={style.title}>Profile→</div>
        </ScrollAnimationComponent>
        <div className={style.description}>
          <ScrollAnimationComponent transform="right" delay={0.1}>
            プロフィール
          </ScrollAnimationComponent>
          <ScrollAnimationComponent transform="right" delay={0.2}>
            好きなこと
          </ScrollAnimationComponent>
          <ScrollAnimationComponent transform="right" delay={0.3}>
            やりたいこと
          </ScrollAnimationComponent>
          <ScrollAnimationComponent transform="right" delay={0.4}>
            ...
          </ScrollAnimationComponent>
        </div>
      </div>
      <div className={style.imageContainer}>
        <ScrollAnimationComponent>
          <ImageScatter images={images} />
        </ScrollAnimationComponent>
      </div>
    </div>
  );
};
