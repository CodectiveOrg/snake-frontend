import type { ReactNode } from "react";

import HighScoreFrameComponent from "./components/high-score-frame/high-score-frame.component.tsx";

import styles from "./high-score.module.css";

type Props = {
  highScore: number;
};

export default function HighScoreComponent({ highScore }: Props): ReactNode {
  return (
    <div className={styles["high-score"]}>
      <HighScoreFrameComponent className={styles.frame} />
      {highScore}
    </div>
  );
}
