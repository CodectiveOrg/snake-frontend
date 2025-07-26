import { type ReactNode, useEffect, useRef } from "react";

import { useNavigate } from "react-router";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component.tsx";
import PauseModalComponent from "@/components/pause-modal/pause-modal.component.tsx";
import UserBadgeComponent from "@/components/user-badge/user-badge.component";

import PauseIcon from "@/icons/pause/pause.icon";
import PlayIcon from "@/icons/play/play.icon";

import useVerifyQuery from "@/queries/use-verify.query.ts";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import HighScoreComponent from "./components/high-score/high-score.component";
import ScoreComponent from "./components/score/score.component";
import SeparatorComponent from "./components/separator/separator.component";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useVerifyQuery();

  const score = useGameStore((state) => state.score);
  const gameState = useGameStore((state) => state.gameState);
  const play = useGameStore((state) => state.play);
  const pause = useGameStore((state) => state.pause);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resetGameStates = (): void => {
    useGameStore.getState().reset();
    useGameStore.getState().play();
  };

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
  }, []);

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
      <div className={styles["info-board"]}>
        <UserBadgeComponent
          username={data.username}
          picture="/images/user-picture-placeholder.webp"
        />
        <ScoreComponent score={score}></ScoreComponent>
        <div className={styles.wrapper}>
          <HighScoreComponent highScore={232}></HighScoreComponent>
          <button
            onClick={togglePauseButtonClickHandler}
            className={styles.button}
          >
            {gameState === "playing" ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>
      <SeparatorComponent className={styles.separator} dentWidth={1} />
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
