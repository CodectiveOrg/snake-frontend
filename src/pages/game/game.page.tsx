import { type ReactNode, useEffect, useRef } from "react";

import { useNavigate } from "react-router";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component";
import ModalComponent from "@/components/modal/modal.component";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const score = useGameStore((state) => state.score);
  const gameState = useGameStore((state) => state.gameState);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openButtonClickHandler = (): void => {
    modalRef.current?.showModal();
  };

  const closeButtonClickHandler = (): void => {
    modalRef.current?.close();
  };

  const resetGameStates = (): void => {
    useGameStore.getState().run();
    useGameStore.getState().resetScore();
  };

  const restartGame = (): void => {
    if (!masterRef.current || !canvasRef.current) {
      return;
    }

    resetGameStates();

    masterRef.current = new GameMasterService(canvasRef.current);
    masterRef.current.run();

    closeButtonClickHandler();
  };

  const exitGame = (): void => {
    resetGameStates();
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (masterRef.current || !canvasRef.current) {
      return;
    }

    masterRef.current = new GameMasterService(canvasRef.current);
    masterRef.current.run();
  }, []);

  useEffect(() => {
    resetGameStates();
  }, []);

  useEffect(() => {
    if (gameState === "over") {
      openButtonClickHandler();
    }
  }, [gameState]);

  return (
    <div className={styles.game}>
      <CanvasComponent ref={canvasRef} />
      <div className="info">
        Name: {username}
        <br />
        Score: {score}
      </div>
      <ModalComponent
        title="GAME OVER"
        ref={modalRef}
        className={styles["modal"]}
      >
        <GameOverModalComponent restartGame={restartGame} exitGame={exitGame} />
      </ModalComponent>
    </div>
  );
}
