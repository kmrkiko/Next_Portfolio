import { Career } from "./Content/Career";
import { Portfolio } from "./Content/Portfolio";
import { Profile } from "./Content/Profile";
import { Skill } from "./Content/Skill";
import style from "./frontContents.module.css";

export const FrontContens = () => {
  return (
    <div className={style.Container}>
      <Profile />
      <Career />
      <Skill />
      <Portfolio />
    </div>
  );
};
