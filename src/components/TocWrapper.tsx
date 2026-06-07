import type { TocItem } from "rehype-mdx-toc";

import styles from "./TocWrapper.module.scss";
import Toc from "./Toc";

export interface TocWrapperProps {
  children?: React.ReactNode;
  toc: TocItem[];
  maxDepth?: number;
}

export default function TocWrapper(props: TocWrapperProps) {
  const { toc, maxDepth } = props;

  return (
    <div className={styles.grid}>
      <div className={styles.gridarticle}>
        {props.children}
      </div>
      <div className={styles.gridtoc}>
        <Toc toc={props.toc} maxDepth={maxDepth} />
      </div>
    </div>
  );
}
