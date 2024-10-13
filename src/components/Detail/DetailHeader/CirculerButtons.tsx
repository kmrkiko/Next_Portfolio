import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

export const CircularButtons = ({ numButtons = 8 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);
  const rotationRef = useRef<number>(0);
  const [targetRotation, setTargetRotation] = useState(0);

  const angleStep = (2 * Math.PI) / numButtons;

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
          gl_FragColor = vec4(0.0, 0.5, 1.0, uOpacity); // uOpacityを使用して透明度を設定
        }
      `,
      transparent: true,
    });

  useFrame(() => {
    rotationRef.current += (targetRotation - rotationRef.current) * 0.1;
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        const angle = (i - rotationRef.current) * angleStep;
        const opacity = (Math.cos(angle) + 2) / 3; // 透明度を動的に計算
        const material = mesh.material as THREE.ShaderMaterial;
        material.uniforms.uOpacity.value = opacity;

        mesh.position.x = Math.sin(angle) * 16;
        mesh.position.y = Math.cos(angle) * 2;
        mesh.position.z = Math.cos(angle) * 2;
      }
    });
  });

  const handleClick = (index: number) => {
    setTargetRotation(index);
  };

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
      {Array.from({ length: numButtons }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          onClick={() => handleClick(i)}
        >
          <primitive object={createRoundedRectGeometry(5, 1.2, 0.3, 32)} />
          <primitive attach="material" object={createShaderMaterial()} />
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.7}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            {i + 1}
          </Text>
        </mesh>
      ))}
    </group>
  );
};
