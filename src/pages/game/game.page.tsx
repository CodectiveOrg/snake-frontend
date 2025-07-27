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
  const end = useGameStore((state) => state.end);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const restartGame = useCallback((): void => {
    reset();
    play();

    masterRef.current = new GameMasterService(canvasRef.current!);
    masterRef.current.run();
  }, [play, reset]);

  const restartHandler = (): void => {
    if (!masterRef.current || !canvasRef.current) {
      return;
    }

    restartGame();
  };

  const exitHandler = (): void => {
    reset();
    end();

    navigate("/");
  };

  useEffect(() => {
    if (masterRef.current || !canvasRef.current) {
      return;
    }

    restartGame();
  }, [restartGame]);

  return (
    <div className={styles.game}>
      <BarComponent />
      <CanvasComponent ref={canvasRef} className={styles.canvas} />
      <PauseModalComponent onExit={exitHandler} />
      {gameState === "over" && (
        <GameOverModalComponent
          onRestart={restartHandler}
          onExit={exitHandler}
        />
      )}
    </div>
  );
}
