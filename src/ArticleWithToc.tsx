import type { TocItem } from "rehype-mdx-toc";
import Toc from "./Toc";

import styles from "./ArticleWithToc.module.scss";

interface ArticleWithTocProps {
  article: React.ReactNode;
  toc: TocItem[];
}

export default function ArticleWithToc(
  props: ArticleWithTocProps
): React.ReactNode {
  const { article, toc } = props;

  return (
    <>
      <div className={styles.articlewithtoc}>
        <div className={styles.toc}>
          <Toc toc={toc} />
        </div>
        <div className={styles.article}>{article}</div>
      </div>
    </>
  );
}
