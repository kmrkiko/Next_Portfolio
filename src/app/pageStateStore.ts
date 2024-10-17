"use client";

import { create } from "zustand";

export type pageTypes = "front" | "profile" | "career" | "skill" | "portfolio";

export interface PageState {
  pageState: pageTypes;
  index: number;
  setPageState: (newString: pageTypes, index?: number) => void;
}

export const usePageStateStore = create<PageState>((set) => ({
  pageState: "front",
  index: 0,
  setPageState: (newString: pageTypes, index?: number) =>
    set({ pageState: newString, index: index ?? 0 }),
}));
