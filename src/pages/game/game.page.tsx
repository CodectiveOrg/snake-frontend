import { type ReactNode, useEffect, useRef, useState } from "react";

import { useNavigate } from "react-router";

import ButtonComponent from "@/components/button/button.component";
import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component.tsx";
import PauseModalComponent from "@/components/modal/modal.component";
import UserBadgeComponent from "@/components/user-badge/user-badge.component";

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

  const username = localStorage.getItem("username");

  const score = useGameStore((state) => state.score);
  const gameState = useGameStore((state) => state.gameState);

  const [isPlaying, setIsPlaying] = useState(false);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resetGameStates = (): void => {
    useGameStore.getState().reset();
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

  const modalRef = useRef<HTMLDialogElement>(null);

  const playPauseButtonClickHandler = () => {
    setIsPlaying((prev) => !prev);

    if (!isPlaying) {
      modalRef.current?.showModal();
      useGameStore.getState().pause();
    } else {
      useGameStore.getState().run();
    }
  };

  const closeButtonClickHandler = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <PauseModalComponent ref={modalRef} title="Pause">
        <p>Pause</p>
        <ButtonComponent onClick={closeButtonClickHandler}>
          Close
        </ButtonComponent>
      </PauseModalComponent>

      <div className={styles.game}>
        <div className={styles["info-board"]}>
          <UserBadgeComponent
            username="Player Name"
            picture="/images/user-picture-placeholder.webp"
          />
          <ScoreComponent score={12}></ScoreComponent>
          <div className={styles.wrapper}>
            <HighScoreComponent highScore={232}></HighScoreComponent>
            <button
              onClick={playPauseButtonClickHandler}
              className={styles.button}
            >
              {isPlaying ? <PlayIcon /> : <PauseIcon />}
            </button>
          </div>
        </div>
        <SeparatorComponent className={styles.separator} dentWidth={1} />
        <CanvasComponent ref={canvasRef} />
        <div className="info">
          Name: {username}
          <br />
          Score: {score}
        </div>
        {gameState === "over" && (
          <GameOverModalComponent
            onRestart={restartHandler}
            onExit={exitHandler}
          />
        )}
      </div>
    </>
  );
}
