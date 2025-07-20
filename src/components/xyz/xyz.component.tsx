import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import XyzFrameComponent from "@/components/xyz/components/xyz-frame/xyz-frame.component.tsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserver } from "@/hooks/use-resize-observer.ts";

import styles from "./xyz.module.css";

type Props = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export default function XyzComponent({
  title,
  className,
  children,
}: Props): ReactNode {
  const { ref: titleRef, width: titleWidth } =
    useResizeObserver<HTMLDivElement>();

  return (
    <div
      className={clsx(styles.xyz, className)}
      style={{ "--offset": Size.MODAL_TITLE_OFFSET } as CSSProperties}
    >
      <XyzFrameComponent className={styles.frame} titleWidth={titleWidth} />
      <div ref={titleRef} className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
