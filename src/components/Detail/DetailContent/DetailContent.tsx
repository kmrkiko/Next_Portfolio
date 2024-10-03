import style from "./frontContents.module.css";
import { MarkdownRenderer } from "./MarkdownRenderer";

export const DetailContent = () => {
  return (
    <div>
      <MarkdownRenderer filePath="/images/siteArchitecture.md" />
    </div>
  );
};
