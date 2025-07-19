import type { ReactNode, Ref } from "react";

import clsx from "clsx";

import CanvasFrameComponent from "@/components/canvas/components/canvas-frame/canvas-frame.component.tsx";

import styles from "./canvas.module.css";

type Props = { ref: Ref<HTMLCanvasElement>; className?: string };

export default function CanvasComponent({ ref, className }: Props): ReactNode {
  return (
    <div className={clsx(styles.canvas, className)}>
      <CanvasFrameComponent className={styles.frame} />
      <canvas ref={ref}></canvas>
    </div>
  );
}
