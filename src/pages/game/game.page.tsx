import { type ReactNode, useEffect, useRef } from "react";

import { useNavigate } from "react-router";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const score = useGameStore((state) => state.score);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resetGameStates = (): void => {
    useGameStore.getState().resetScore();
    useGameStore.getState().run();
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

  return (
    <div className={styles.game}>
      <CanvasComponent ref={canvasRef} />
      <div className="info">
        Name: {username}
        <br />
        Score: {score}
      </div>
      <GameOverModalComponent onRestart={restartHandler} onExit={exitHandler} />
    </div>
  );
}
