import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { getStatsApi } from "@/api/history/get-stats.api.ts";

import UserBadgeComponent from "@/components/user-badge/user-badge.component.tsx";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import HighScoreComponent from "@/pages/game/components/high-score/high-score.component.tsx";
import PauseButtonComponent from "@/pages/game/components/pause-button/pause-button.component.tsx";
import ScoreComponent from "@/pages/game/components/score/score.component.tsx";
import SeparatorComponent from "@/pages/game/components/separator/separator.component.tsx";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./bar.module.css";

export default function BarComponent(): ReactNode {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatsApi,
  });

  const score = useGameStore((state) => state.score);

  const { ref: scoreRef, width: scoreWidth } =
    useResizeObserverHook<HTMLDivElement>();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.bar}>
      <UserBadgeComponent username={data.username} picture={data.picture} />
      <ScoreComponent ref={scoreRef} className={styles.score} score={score} />
      <div className={styles.wrapper}>
        <HighScoreComponent highScore={data.highScore} />
        <PauseButtonComponent />
      </div>
      <SeparatorComponent className={styles.separator} dentWidth={scoreWidth} />
    </div>
  );
}
