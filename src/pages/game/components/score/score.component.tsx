import type { ReactNode, Ref } from "react";

import ScoreFrameComponent from "./components/score-frame/score-frame.component.tsx";

import styles from "./score.module.css";

type Props = {
  ref: Ref<HTMLDivElement>;
  score: number;
};

export default function ScoreComponent({ ref, score }: Props): ReactNode {
  return (
    <div ref={ref} className={styles.score}>
      <ScoreFrameComponent className={styles.frame} />
      {score}
    </div>
  );
}
