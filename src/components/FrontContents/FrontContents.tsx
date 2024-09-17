import style from "./frontContents.module.css";
import { ScrollAnimationComponent } from "./ScrollAnimationComponent";

export const FrontContens = () => {
  return (
    <div className={style.Container}>
      <div className={style.temp}>
        <ScrollAnimationComponent transform="right">
          <div className={style.tempContent} />
        </ScrollAnimationComponent>
      </div>
      <div className={style.temp}>
        <ScrollAnimationComponent transform="left">
          <div className={style.tempContent} />
        </ScrollAnimationComponent>
      </div>
      <div className={style.temp}>
        <ScrollAnimationComponent transform="scale">
          <div className={style.tempContent} />
        </ScrollAnimationComponent>
      </div>
      <div className={style.temp}>
        <ScrollAnimationComponent>
          <div className={style.tempContent} />
        </ScrollAnimationComponent>
      </div>
      <div className={style.temp}>
        <ScrollAnimationComponent>
          <div className={style.tempContent} />
        </ScrollAnimationComponent>
      </div>
    </div>
  );
};
