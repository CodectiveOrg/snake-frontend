import type { PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import RibbonFrameComponent from "@/components/ribbon/components/ribbon-frame/ribbon-frame.component.tsx";

import styles from "./ribbon.module.css";

type Props = PropsWithChildren;

export default function RibbonComponent({ children }: Props): ReactNode {
  return (
    <div className={styles.ribbon}>
      <RibbonFrameComponent
        className={clsx(styles.frame, styles.left)}
        width={12}
        height={44}
        largeOffset={36}
        smallOffset={24}
      />
      <div className={styles.content}>{children}</div>
      <RibbonFrameComponent
        className={clsx(styles.frame, styles.right)}
        width={12}
        height={44}
        largeOffset={36}
        smallOffset={24}
      />
    </div>
  );
}
