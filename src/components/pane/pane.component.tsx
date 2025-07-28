import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import PaneFrameComponent from "@/components/pane/components/pane-frame/pane-frame.component.tsx";
import PaneShadeComponent from "@/components/pane/components/pane-shade/pane-shade.component.tsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import styles from "./pane.module.css";

type Props = PropsWithChildren<{
  title: string;
  shade?: boolean;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}>;

export default function PaneComponent({
  title,
  shade = false,
  className,
  titleClassName,
  contentClassName,
  children,
}: Props): ReactNode {
  const { width: documentWidth } = useResizeObserverHook<HTMLDivElement>(
    document.documentElement,
  );

  const { ref: titleRef, width: titleWidth } =
    useResizeObserverHook<HTMLDivElement>();

  const minBleed =
    Size.PANE_MIN_BLEED +
    2 * Size.PANE_TITLE_PADDING +
    2 * Size.PANE_TITLE_OFFSET +
    2 * Size.PANE_CORNER_OFFSET;

  const minWidth = titleWidth + minBleed;
  const hasDent = documentWidth >= 600;

  return (
    <div
      className={clsx(styles.pane, className)}
      style={
        {
          "--offset": Size.PANE_TITLE_OFFSET,
          minWidth: hasDent ? `${minWidth}px` : undefined,
        } as CSSProperties
      }
    >
      <PaneFrameComponent
        className={styles.frame}
        titleWidth={titleWidth}
        hasDent={hasDent}
      />
      {shade && (
        <PaneShadeComponent
          className={styles.shade}
          titleWidth={titleWidth}
          hasDent={hasDent}
        />
      )}
      <div ref={titleRef} className={clsx(styles.title, titleClassName)}>
        {title}
      </div>
      <div className={clsx(styles.content, contentClassName)}>{children}</div>
    </div>
  );
}
