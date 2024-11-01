export interface Content {
  mdPath: string;
  title: string;
}

export interface ContentsList {
  [key: string]: Content[]; // 各キーがContentの配列を持つ
}

export const ContentsList: ContentsList = {
  profile: [
    {
      mdPath: "/contents/profile/profile.md",
      title: "自己紹介",
    },
    {
      mdPath: "/contents/profile/vision.md",
      title: "仕事観/ビジョン",
    },
  ],
  career: [
    { mdPath: "/contents/career/educational background.md", title: "学歴" },
    { mdPath: "/contents/career/project1.md", title: "VRゲーム開発案件" },
    { mdPath: "/contents/career/project2.md", title: "XRアプリ開発案件" },
  ],
  skill: [
    { mdPath: "/contents/skill/ap.md", title: "応用情報技術者" },
    { mdPath: "/contents/skill/toeic.md", title: "TOEIC" },
  ],
  portfolio: [
    { mdPath: "/contents/portfolio/vrdram.md", title: "VRドラムゲーム" },
    { mdPath: "/contents/portfolio/thissite.md", title: "このサイトについて" },
    {
      mdPath: "/contents/portfolio/unrealvideo.md",
      title: "UEを用いた映像制作",
    },
    {
      mdPath: "/contents/portfolio/unrealgame.md",
      title: "UEを用いたロボットゲーム",
    },
  ],
};
