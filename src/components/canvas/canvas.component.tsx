import type { ReactNode, Ref } from "react";

import styles from "./canvas.module.css";

type Props = { ref: Ref<HTMLCanvasElement> };

export default function CanvasComponent({ ref }: Props): ReactNode {
  return <canvas ref={ref} className={styles.canvas}></canvas>;
}
