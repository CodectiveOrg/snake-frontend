import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import PaneFrameComponent from "@/components/pane/components/pane-frame/pane-frame.component.tsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserver } from "@/hooks/use-resize-observer.ts";

import styles from "./pane.module.css";

type Props = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export default function PaneComponent({
  title,
  className,
  children,
}: Props): ReactNode {
  const { ref: titleRef, width: titleWidth } =
    useResizeObserver<HTMLDivElement>();

  const minBleed =
    Size.PANE_MIN_BLEED +
    2 * Size.PANE_TITLE_PADDING +
    2 * Size.PANE_TITLE_OFFSET +
    2 * Size.PANE_CORNER_OFFSET;

  const minWidth = titleWidth + minBleed;

  return (
    <div
      className={clsx(styles.pane, className)}
      style={
        {
          "--offset": Size.PANE_TITLE_OFFSET,
          minWidth: `${minWidth}px`,
        } as CSSProperties
      }
    >
      <PaneFrameComponent className={styles.frame} titleWidth={titleWidth} />
      <div ref={titleRef} className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
