"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./frontContents.module.css";

const ScrollAnimationComponent = () => {
  const targetRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimateEnd, setIsAnimateEnd] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimating && !isAnimateEnd) {
          setIsAnimating(true);

          // アニメーションの開始
          setTimeout(() => {
            // アニメーションが完了したらスクロールを再度有効にする
            console.log("!!!");
            setIsAnimating(false);
            setIsAnimateEnd(true);
            if (targetRef.current) {
              observer.unobserve(targetRef.current);
            }
          }, 2000); // アニメーションの時間（ミリ秒）
        }
      },
      { threshold: 0.5 } // 要素が50%表示されたときにトリガー
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

  return (
    <div
      ref={targetRef}
      className={`${styles.fadeIn} ${
        isAnimating || isAnimateEnd ? styles.show : ""
      }`}
    >
      animation
    </div>
  );
};

export default ScrollAnimationComponent;
