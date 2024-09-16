import { useState } from "react";

export const useHeaderEvents = () => {
  const [isShowHeader, setShowHeader] = useState(false);
  const [showDetail, setShowDetail] = useState(-1);
  const ShowHeader = () => {
    setShowHeader(true);
  };
  const HideHeader = () => {
    setShowHeader(false);
    setShowDetail(-1);
  };
  const ShowDetail = (number: number) => {
    setShowDetail(number);
  };
  return { isShowHeader, showDetail, ShowHeader, ShowDetail, HideHeader };
};
