import { pageTypes } from "@/app/pageStateStore";
import styles from "./headerDetail.module.css";
import { Content } from "../Detail/DetailContent/data";

export interface HeaderDetailProps {
  isShow: boolean;
}

export const HeaderLinks = (props: HeaderDetailProps) => {
  const { isShow } = props;

  return (
    <div className={`${styles.slideOutBox} ${isShow ? styles.slideOut : ""}`}>
      <div className={styles.text}>
        <a
          className={styles.link}
          href="https://github.com/kmrkiko/Next_Portfolio"
        >
          github
        </a>
      </div>{" "}
      <div className={styles.text}>
        <a className={styles.link} href="https://qiita.com/Kmr_kiko">
          Qiita
        </a>
      </div>{" "}
      <div className={styles.text}>
        <a className={styles.link} href="mailto:kimura.k.ay1@gmail.com">
          メール：kimura.k.ay1@gmail.com
        </a>
      </div>
    </div>
  );
};
