"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./frontContents.module.css";

export interface ScrollAnimationComponentProps {
  transform?: transformType;
  threshold?: number;
  children: ReactNode;
}

export type transformType = `none` | `right` | `left` | `scale`;

export const ScrollAnimationComponent = (
  props: ScrollAnimationComponentProps
) => {
  const { transform = `none`, threshold = 0.5, children } = props;
  const targetRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating) {
          setIsAnimating(true);
        }
      },
      { threshold: threshold } // 要素が50%表示されたときにトリガー
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [isAnimating]);

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
