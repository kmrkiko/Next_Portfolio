import { pageTypes } from "@/app/pageStateStore";
import styles from "./headerDetail.module.css";
import { Content } from "../Detail/DetailContent/data";

export interface HeaderDetailProps {
  isShow: boolean;
  pageType: pageTypes;
  onClickContent: (type: pageTypes, index?: number) => void;
  contents: Content[];
}

export const HeaderDetail = (props: HeaderDetailProps) => {
  const { isShow, pageType, onClickContent, contents } = props;

  return (
    <div className={`${styles.slideOutBox} ${isShow ? styles.slideOut : ""}`}>
      {contents.map((detail, index) => (
        <div
          key={index}
          className={styles.text}
          onClick={() => onClickContent(pageType, index)}
        >
          {detail.title}
        </div>
      ))}
    </div>
  );
};
