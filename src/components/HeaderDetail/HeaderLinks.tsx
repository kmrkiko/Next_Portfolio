import { pageTypes } from "@/app/pageStateStore";
import styles from "./headerDetail.module.css";
import { Content } from "../../../public/Contents/data";

export interface HeaderDetailProps {
  isShow: boolean;
}

export const HeaderLinks = (props: HeaderDetailProps) => {
  const { isShow } = props;
  const contents = ["Content", "Content", "Content", "Content"];

  return (
    <div className={`${styles.slideOutBox} ${isShow ? styles.slideOut : ""}`}>
      {contents.map((detail, index) => (
        <div key={index} className={styles.text}>
          {detail}
        </div>
      ))}
    </div>
  );
};
