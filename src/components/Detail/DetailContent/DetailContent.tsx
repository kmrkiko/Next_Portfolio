import style from "./DetailContent.module.css";
import { MarkdownRenderer } from "./MarkdownRenderer";

import { CircularButtons } from "@/components/Detail/DetailHeader/CirculerButtons";
import { Canvas, useFrame } from "@react-three/fiber";

export const DetailContent = () => {
  return (
    <div className={style.Container}>
      <Canvas>
        <CircularButtons />
      </Canvas>
      <MarkdownRenderer filePath="/images/siteArchitecture.md" />
    </div>
  );
};
