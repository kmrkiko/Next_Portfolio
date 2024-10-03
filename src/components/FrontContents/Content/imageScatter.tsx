import React from "react";
import style from "./scatterImage.module.css"; // CSSファイルをインポート

export interface ImageScatterProps {
  images: string[];
}

export const ImageScatter = (props: ImageScatterProps) => {
  const { images } = props;
  return (
    <div className={style.imagescattercontainer}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index}`}
          className={style.scatteredimage}
        />
      ))}
    </div>
  );
};
