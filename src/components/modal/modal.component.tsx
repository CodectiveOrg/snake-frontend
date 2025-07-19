import type { CSSProperties, PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import ModalFrameComponent from "@/components/modal/components/modal-frame/modal-frame.component.tsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserver } from "@/hooks/use-resize-observer.ts";

import styles from "./modal.module.css";

type Props = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export default function ModalComponent({
  title,
  className,
  children,
}: Props): ReactNode {
  const { ref: titleRef, width: titleWidth } =
    useResizeObserver<HTMLDivElement>();

  return (
    <div
      className={clsx(styles.modal, className)}
      style={{ "--offset": Size.MODAL_OFFSET } as CSSProperties}
    >
      <ModalFrameComponent className={styles.frame} titleWidth={titleWidth} />
      <div ref={titleRef} className={styles.title}>
        {title}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
