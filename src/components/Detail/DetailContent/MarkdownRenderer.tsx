"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMermaidPlugin from "remark-mermaid-plugin";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import style from "./DetailContent.module.css";

export interface MarkdownRendererProps {
  filePath: string;
}

export const MarkdownRenderer = (props: MarkdownRendererProps) => {
  const { filePath } = props;
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    // fetch APIを使ってMarkdownファイルの内容を取得
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Error loading markdown file:", error));
  }, [filePath]);

  return (
    <div className={style.Markdown}>
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[[remarkMermaidPlugin, { theme: "dark" }] as any]}
        rehypePlugins={[rehypeRaw, rehypeStringify]}
      />
    </div>
  );
};
