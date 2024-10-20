import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";
import { Content } from "../DetailContent/data";

export interface CircularButtonsProps {
  index: number;
  contents: Content[];
  onClickCircularButton: (index: number) => void;
}

export const CircularButtons = (props: CircularButtonsProps) => {
  const { index, contents, onClickCircularButton } = props;
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const rotationRef = useRef<number>(0);

  const angleStep = (2 * Math.PI) / contents.length;

  const createShaderMaterial = () =>
    new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: 1 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        void main() {
          vec3 sRGBColor = vec3(255.0 / 255.0, 246.0 / 255.0, 225.0 / 255.0); // sRGB値を正規化
      gl_FragColor = vec4(sRGBColor, uOpacity);
        }
      `,
      transparent: true,
    });

  useFrame(() => {
    rotationRef.current += (index - rotationRef.current) * 0.1;
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const angle = (i - rotationRef.current) * angleStep;

        const opacity = (Math.cos(angle) + 2) / 3;
        const material = mesh.material as THREE.ShaderMaterial;
        if (material.uniforms) {
          material.uniforms.uOpacity.value = opacity;
        }

        mesh.position.x = (Math.sin(angle) * window.innerWidth) / 100;
        mesh.position.y = Math.cos(angle) * 2;
        mesh.position.z = Math.cos(angle) * 2;
      }
    });
  });

  const createRoundedRectGeometry = (
    width: number,
    height: number,
    radius: number,
    segments: number
  ) => {
    const shape = new THREE.Shape();
    const xOffset = -width / 2;
    const yOffset = -height / 2;

    shape.moveTo(xOffset + radius, yOffset);
    shape.lineTo(xOffset + width - radius, yOffset);
    shape.quadraticCurveTo(
      xOffset + width,
      yOffset,
      xOffset + width,
      yOffset + radius
    );
    shape.lineTo(xOffset + width, yOffset + height - radius);
    shape.quadraticCurveTo(
      xOffset + width,
      yOffset + height,
      xOffset + width - radius,
      yOffset + height
    );
    shape.lineTo(xOffset + radius, yOffset + height);
    shape.quadraticCurveTo(
      xOffset,
      yOffset + height,
      xOffset,
      yOffset + height - radius
    );
    shape.lineTo(xOffset, yOffset + radius);
    shape.quadraticCurveTo(xOffset, yOffset, xOffset + radius, yOffset);

    return new THREE.ShapeGeometry(shape, segments);
  };

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {Array.from({ length: contents.length }).map((_, i) => {
        // テキストの幅を計算（仮に1文字あたりの幅を設定）
        const textWidthEstimate = contents[i].title.length * 0.7; // 調整が必要

        return (
          <mesh
            key={i}
            ref={(el) => {
              if (el) meshRefs.current[i] = el;
            }}
            onClick={() => onClickCircularButton(i)}
          >
            <primitive
              object={createRoundedRectGeometry(
                textWidthEstimate + 1,
                1.2,
                0.3,
                32
              )}
            />
            <primitive attach="material" object={createShaderMaterial()} />
            <Text
              position={[0, 0, 0.001]}
              fontSize={0.5}
              color="black"
              anchorX="center"
              anchorY="middle"
              font="/fonts/GenEiNuGothic-EB.ttf"
            >
              {contents[i].title}
            </Text>
          </mesh>
        );
      })}
    </group>
  );
};
