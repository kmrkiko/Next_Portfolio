import { usePageStateStore } from "@/app/pageStateStore";
import style from "./DetailContent.module.css";
import { MarkdownRenderer } from "./MarkdownRenderer";

import { CircularButtons } from "@/components/Detail/DetailHeader/CirculerButtons";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContentsList } from "./data";

export const DetailContent = () => {
  const pageStateStore = usePageStateStore();
  const filePath =
    ContentsList[pageStateStore.pageState][pageStateStore.index].mdPath;
  return (
    <div className={style.Container}>
      <div className={style.Title}>{pageStateStore.pageState}</div>
      <Canvas>
        <CircularButtons
          index={pageStateStore.index}
          contents={ContentsList[pageStateStore.pageState]}
          onClickCircularButton={(index) =>
            pageStateStore.setPageState(pageStateStore.pageState, index)
          }
        />
      </Canvas>
      <div className={style.MarkdownContainer}>
        <MarkdownRenderer filePath={filePath} />
      </div>
    </div>
  );
};
