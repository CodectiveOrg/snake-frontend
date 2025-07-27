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
  const { data } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatsApi,
  });

  const score = useGameStore((state) => state.score);

  const { ref: scoreRef, width: scoreWidth } =
    useResizeObserverHook<HTMLDivElement>();

  return (
    <div className={styles.bar}>
      <UserBadgeComponent
        username={data?.username ?? ""}
        picture={data?.picture ?? null}
      />
      <img
        className={styles.profile}
        src={data?.picture ?? "/images/user-picture-placeholder.webp"}
        alt="User's Profile"
      />
      <ScoreComponent ref={scoreRef} className={styles.score} score={score} />
      <div className={styles.wrapper}>
        <HighScoreComponent highScore={data?.highScore ?? 0} />
        <PauseButtonComponent />
      </div>
      <SeparatorComponent className={styles.separator} dentWidth={scoreWidth} />
    </div>
  );
}
