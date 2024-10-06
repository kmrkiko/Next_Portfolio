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

  useFrame(() => {
    rotationRef.current += (targetRotation - rotationRef.current) * 0.1;
    meshRefs.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.position.x = Math.sin((i - rotationRef.current) * angleStep) * 4;
        mesh.position.y = Math.cos((i - rotationRef.current) * angleStep) * 2;
        mesh.position.z = Math.cos((i - rotationRef.current) * angleStep) * 2;
      }
    });
  });

  const handleClick = (index: number) => {
    setTargetRotation(index);
  };

  const createShaderMaterial = () =>
    new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.5, 1.0, 1.0); // 全面を青色に設定
        }
      `,
    });

  const createRoundedRectGeometry = (width, height, radius, segments) => {
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
          <primitive object={createRoundedRectGeometry(1.2, 1.2, 0.3, 32)} />
          <primitive attach="material" object={createShaderMaterial()} />
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.5}
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
