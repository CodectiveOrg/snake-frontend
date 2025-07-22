import { type ReactNode, useEffect, useRef, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import ModalComponent from "@/components/modal/modal.component";
import UserBadgeComponent from "@/components/user-badge/user-badge.component";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import PauseSVG from "./components/SVGS/pause.svg";
import PlaySVG from "./components/SVGS/play.svg";
import HighScoreComponent from "./components/high-score/high-score.component";
import ScoreComponent from "./components/score/score.component";
import SeparatorComponent from "./components/separator/separator.component";

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
              {isPlaying ? <PlaySVG /> : <PauseSVG />}
            </button>
          </div>
        </div>
        <SeparatorComponent dentWidth={1}></SeparatorComponent>
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
