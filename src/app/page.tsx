"use client";

import { FrontContens } from "@/components/FrontContents/FrontContents";
import { Header } from "@/components/Header/Header";
import { usePageStateStore } from "./pageStateStore";
import { DetailContent } from "@/components/Detail/DetailContent/DetailContent";

export default function Home() {
  const pageStateStore = usePageStateStore();
  return (
    <>
      <Header />
      {pageStateStore.pageState === "front" ? (
        <FrontContens />
      ) : (
        <DetailContent />
      )}
    </>
  );
}
