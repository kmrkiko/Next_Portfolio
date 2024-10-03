"use client";

import { FrontContens } from "@/components/FrontContents/FrontContents";
import { Header } from "@/components/Header/Header";
import { usePageStateStore } from "./pageStateStore";
import { DetailHeader } from "@/components/Detail/DetailHeader/DetailHeader";
import { CircularButtons } from "@/components/Detail/DetailHeader/CirculerButtons";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Home() {
  const pageStateStore = usePageStateStore();
  return (
    <>
      {/* <Header /> */}
      <Canvas>
        <CircularButtons />
      </Canvas>
    </>
  );
}
