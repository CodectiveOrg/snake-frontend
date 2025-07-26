import { type ReactNode, useCallback, useEffect, useRef } from "react";

import { useNavigate } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getStatsApi } from "@/api/history/get-stats.api.ts";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component.tsx";
import PauseModalComponent from "@/components/pause-modal/pause-modal.component.tsx";
import UserBadgeComponent from "@/components/user-badge/user-badge.component";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import PauseIcon from "@/icons/pause/pause.icon";
import PlayIcon from "@/icons/play/play.icon";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import HighScoreComponent from "./components/high-score/high-score.component";
import ScoreComponent from "./components/score/score.component";
import SeparatorComponent from "./components/separator/separator.component";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["stats"],
    queryFn: getStatsApi,
  });

  const score = useGameStore((state) => state.score);
  const gameState = useGameStore((state) => state.gameState);
  const play = useGameStore((state) => state.play);
  const pause = useGameStore((state) => state.pause);
  const reset = useGameStore((state) => state.reset);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { ref: scoreRef, width: scoreWidth } =
    useResizeObserverHook<HTMLDivElement>();

  const resetGameStates = useCallback((): void => {
    reset();
    play();
  }, [play, reset]);

  const restartHandler = (): void => {
    if (!masterRef.current || !canvasRef.current) {
      return;
    }

    resetGameStates();

    masterRef.current = new GameMasterService(canvasRef.current);
    masterRef.current.run();
  };

  const exitHandler = (): void => {
    resetGameStates();
    navigate("/");
  };

  useEffect(() => {
    if (masterRef.current || !canvasRef.current) {
      return;
    }

    resetGameStates();

    masterRef.current = new GameMasterService(canvasRef.current);
    masterRef.current.run();
  }, [resetGameStates]);

  const togglePauseButtonClickHandler = () => {
    if (gameState === "playing") {
      pause();
    } else {
      play();
    }
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.game}>
      <div className={styles.bar}>
        <UserBadgeComponent username={data.username} picture={data.picture} />
        <ScoreComponent ref={scoreRef} score={score}></ScoreComponent>
        <HighScoreComponent highScore={data.highScore}></HighScoreComponent>
        <button onClick={togglePauseButtonClickHandler}>
          {gameState === "playing" ? <PauseIcon /> : <PlayIcon />}
        </button>
      </div>
      <SeparatorComponent className={styles.separator} dentWidth={scoreWidth} />
      <CanvasComponent ref={canvasRef} />
      <PauseModalComponent />
      {gameState === "over" && (
        <GameOverModalComponent
          onRestart={restartHandler}
          onExit={exitHandler}
        />
      )}
    </div>
  );
}
