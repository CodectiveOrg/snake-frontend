import type { ReactNode, Ref } from "react";

import clsx from "clsx";

import ScoreFrameComponent from "./components/score-frame/score-frame.component.tsx";

import styles from "./score.module.css";

type Props = {
  ref: Ref<HTMLDivElement>;
  score: number;
  className: string;
};

export default function ScoreComponent({
  ref,
  score,
  className,
}: Props): ReactNode {
  return (
    <div ref={ref} className={clsx(styles.score, className)}>
      <ScoreFrameComponent className={styles.frame} />
      {score}
    </div>
  );
}
