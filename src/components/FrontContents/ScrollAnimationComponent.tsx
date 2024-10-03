"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./frontContents.module.css";

export interface ScrollAnimationComponentProps {
  transform?: transformType;
  threshold?: number;
  delay?: number; // delayプロパティを追加
  children: ReactNode;
}

export type transformType = `none` | `right` | `left` | `scale`;

export const ScrollAnimationComponent = (
  props: ScrollAnimationComponentProps
) => {
  const { transform = `none`, threshold = 0.5, delay = 0, children } = props; // デフォルトのdelayを0に設定
  const targetRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          const timerId = setTimeout(() => {
            setIsAnimating(true);
          }, delay * 1000); // delay秒後にアニメーションを開始

          // クリーンアップ関数でタイマーをクリア
          return () => clearTimeout(timerId);
        }
      },
      { threshold: threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [isAnimating, delay]); // delayも依存配列に追加

  const style =
    transform === `right`
      ? `${styles.rightSlideInBox} ${isAnimating ? styles.slideIn : ""}`
      : transform === `left`
      ? `${styles.leftSlideInBox} ${isAnimating ? styles.slideIn : ""}`
      : transform === `scale`
      ? `${styles.scaleBox} ${isAnimating ? styles.scale : ""}`
      : `${styles.fadeIn} ${isAnimating ? styles.show : ""}`;

  return (
    <div ref={targetRef}>
      <div className={style}>{children}</div>
    </div>
  );
};
