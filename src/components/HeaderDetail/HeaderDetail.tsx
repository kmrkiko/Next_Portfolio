import styles from "./headerDetail.module.css";

export interface HeaderDetailProps {
  isShow: boolean;
}

export const HeaderDetail = (prop: HeaderDetailProps) => {
  const { isShow } = prop;
  return (
    <div className={`${styles.slideOutBox} ${isShow ? styles.slideOut : ""}`}>
      <div className={styles.text}>Content</div>
      <div className={styles.text}>Content</div>
      <div className={styles.text}>Content</div>
      <div className={styles.text}>Content</div>
    </div>
  );
};
