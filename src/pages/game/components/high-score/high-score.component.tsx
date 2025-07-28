import type { ReactNode } from "react";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import HighScoreFrameComponent from "./components/high-score-frame/high-score-frame.component.tsx";

import styles from "./high-score.module.css";

type Props = {
  highScore: number;
};

export default function HighScoreComponent({ highScore }: Props): ReactNode {
  const {
    ref: highScoreRef,
    width: highScoreWidth,
    height: highScoreHeight,
  } = useResizeObserverHook<HTMLDivElement>();

  return (
    <div className={styles["high-score"]}>
      <HighScoreFrameComponent
        className={styles.frame}
        highScoreWidth={highScoreWidth}
        highScoreHeight={highScoreHeight}
      />
      <div ref={highScoreRef} className={styles.value}>
        {highScore}
      </div>
    </div>
  );
}
