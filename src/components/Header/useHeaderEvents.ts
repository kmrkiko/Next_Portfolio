import { pageTypes, usePageStateStore } from "@/app/pageStateStore";
import { useState } from "react";

export const useHeaderEvents = () => {
  const pageStateStore = usePageStateStore();
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

  const onClickContent = (type: pageTypes, index?: number) => {
    pageStateStore.setPageState(type, index);
  };
  const pageState = pageStateStore.pageState;
  return {
    isShowHeader,
    showDetail,
    ShowHeader,
    ShowDetail,
    HideHeader,
    pageState,
    onClickContent,
  };
};
