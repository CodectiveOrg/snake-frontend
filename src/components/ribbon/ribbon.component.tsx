import type { PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import RibbonFrameComponent from "@/components/ribbon/components/ribbon-frame/ribbon-frame.component.tsx";

import styles from "./ribbon.module.css";

type Props = PropsWithChildren;

export default function RibbonComponent({ children }: Props): ReactNode {
  const indentWidth = 12;
  const largeOffset = 36;
  const smallOffset = 24;

  return (
    <div className={styles.ribbon}>
      <RibbonFrameComponent
        className={clsx(styles.frame, styles.left)}
        indentWidth={indentWidth}
        largeOffset={largeOffset}
        smallOffset={smallOffset}
      />
      <div className={styles.content}>{children}</div>
      <RibbonFrameComponent
        className={clsx(styles.frame, styles.right)}
        indentWidth={indentWidth}
        largeOffset={largeOffset}
        smallOffset={smallOffset}
      />
    </div>
  );
}
