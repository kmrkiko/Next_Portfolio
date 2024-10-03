import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Tween, Easing } from "@tweenjs/tween.js";

export const CircularButtons = ({ numButtons = 8 }) => {
  const [cuttentIndex, setCurrentIndex] = useState(0);

  // 配置するボタンの角度を計算
  const angleStep = (2 * Math.PI) / numButtons;

  // ボタンクリック時の処理
  const handleClick = (index: number) => {
    console.log("!!!", index);
    setCurrentIndex(index);
  };

  return (
    <>
      {Array.from({ length: numButtons }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin((i - cuttentIndex) * angleStep) * 2,
            Math.cos((i - cuttentIndex) * angleStep) * 2,
            0,
          ]}
          onClick={() => handleClick(i)}
        >
          <circleGeometry args={[0.3, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      ))}
    </>
  );
};
