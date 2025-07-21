import { type ReactNode, useEffect, useRef, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import ModalComponent from "@/components/modal/modal.component";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const username = localStorage.getItem("username");

  const score = useGameStore((state) => state.score);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (masterRef.current || !canvasRef.current) {
      return;
    }

    masterRef.current = new GameMasterService(canvasRef.current);
    masterRef.current.run();
  }, []);

  const modalRef = useRef<HTMLDialogElement>(null);

  const playPauseButtonClickHandler = () => {
    setIsPlaying((prev) => !prev);

    if (!isPlaying) modalRef.current?.showModal();
  };

  const closeButtonClickHandler = () => {
    modalRef.current?.close();

    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <ModalComponent ref={modalRef} title="Pause">
        <p>Pause</p>
        <ButtonComponent onClick={closeButtonClickHandler}>
          Close
        </ButtonComponent>
      </ModalComponent>
      <div className={styles.game}>
        <div className={styles["info-board"]}>
          <div className={styles["left-section"]}>
            <img className={styles.img} src="" alt="Profile" />
            <div className={styles["username-wrapper"]}>
              <p className={styles.username}>Player Name</p>
            </div>
          </div>

          <div className={styles["middle-section"]}>
            <p className={styles.score}>12</p>
          </div>

          <div className={styles["right-section"]}>
            <div className={styles["rank-section"]}>
              <p className={styles.rank}>232</p>
            </div>

            <button
              onClick={playPauseButtonClickHandler}
              className={styles["play-btn"]}
            >
              {isPlaying ? (
                <img src="./images/play.svg" alt="Play" />
              ) : (
                <img src="./images/pause.svg" alt="Pause" />
              )}
            </button>
          </div>
        </div>
        <CanvasComponent ref={canvasRef} />
        <div className="info">
          Name: {username}
          <br />
          Score: {score}
        </div>
      </div>
    </>
  );
}
