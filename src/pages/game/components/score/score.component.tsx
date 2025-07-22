import type { ReactNode } from "react";

import ScoreFrameComponent from "./components/score-frame/score-frame.component.tsx";

import styles from "./score.module.css";

type Props = {
  score: number;
};

export default function ScoreComponent({ score }: Props): ReactNode {
  return (
    <div className={styles.score}>
      <ScoreFrameComponent className={styles.frame} />
      {score}
    </div>
  );
}
