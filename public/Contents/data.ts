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
      mdPath: "/Contents/profile/profile.md",
      title: "自己紹介",
    },
    {
      mdPath: "/Contents/profile/hobbies.md",
      title: "趣味・好きなこと",
    },
    {
      mdPath: "/Contents/profile/Future Goals.md",
      title: "今後の目標",
    },
  ],
  career: [
    { mdPath: "/content/career1.md", title: "Career Path 1" },
    { mdPath: "/content/career2.md", title: "Career Path 2" },
  ],
  skill: [
    { mdPath: "/content/skill1.md", title: "Skill Set 1" },
    { mdPath: "/content/skill2.md", title: "Skill Set 2" },
  ],
  portfolio: [
    { mdPath: "/content/portfolio1.md", title: "Portfolio Piece 1" },
    { mdPath: "/content/portfolio2.md", title: "Portfolio Piece 2" },
  ],
  link: [
    { mdPath: "/content/link1.md", title: "Link Resource 1" },
    { mdPath: "/content/link2.md", title: "Link Resource 2" },
  ],
};
