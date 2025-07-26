import { type ReactNode, useCallback, useEffect, useRef } from "react";

import { useNavigate } from "react-router";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component.tsx";
import PauseModalComponent from "@/components/pause-modal/pause-modal.component.tsx";

import BarComponent from "@/pages/game/components/bar/bar.component.tsx";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const navigate = useNavigate();

  const gameState = useGameStore((state) => state.gameState);
  const play = useGameStore((state) => state.play);
  const reset = useGameStore((state) => state.reset);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  return (
    <div className={styles.game}>
      <BarComponent />
      <CanvasComponent ref={canvasRef} className={styles.canvas} />
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
