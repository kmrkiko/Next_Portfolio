import style from "./frontContents.module.css";
import ScrollAnimationComponent from "./ScrollAnimationComponent";

export const FrontContens = () => {
  return (
    <div className={style.Container}>
      <div className={style.temp}>
        <ScrollAnimationComponent />
      </div>
    </div>
  );
};
