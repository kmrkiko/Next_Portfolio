import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const CircularButtons = ({ numButtons = 8 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const [targetRotation, setTargetRotation] = useState(0);

  // 配置するボタンの角度を計算
  const angleStep = (2 * Math.PI) / numButtons;

  // フレームごとに回転を更新
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z +=
        (targetRotation - groupRef.current.rotation.z) * 0.1;
    }
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.rotation.z -= (targetRotation - mesh.rotation.z) * 0.1;
      }
    });
  });

  // ボタンクリック時の処理
  const handleClick = (index: number) => {
    setTargetRotation(-index * angleStep);
  };

  return (
    <group ref={groupRef} rotation={[Math.PI / 4, 0, 0]}>
      {Array.from({ length: numButtons }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * angleStep) * 2,
            Math.cos(i * angleStep) * 2,
            0,
          ]}
          ref={(el) => {
            if (el) meshRefs.current[i] = el; // 各メッシュの参照を配列に保存
          }}
          onClick={() => handleClick(i)}
        >
          <circleGeometry args={[0.3, 32]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      ))}
    </group>
  );
};
