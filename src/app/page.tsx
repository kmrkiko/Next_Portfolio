"use client";

import { FrontContens } from "@/components/FrontContents/FrontContents";
import { Header } from "@/components/Header/Header";
import { usePageStateStore } from "./pageStateStore";
import { CircularButtons } from "@/components/Detail/DetailHeader/CirculerButtons";
import { Canvas, useFrame } from "@react-three/fiber";
import { DetailContent } from "@/components/Detail/DetailContent/DetailContent";

export default function Home() {
  const pageStateStore = usePageStateStore();
  return (
    <>
      <Header />
      <DetailContent />
    </>
  );
}
