import { type ReactNode, useEffect, useRef } from "react";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const username = localStorage.getItem("username");

  const score = useGameStore((state) => state.score);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (masterRef.current || !canvasRef.current) {
      return;
    }

    masterRef.current = new GameMasterService(canvasRef.current);
    masterRef.current.run();
  }, []);

  return (
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

          <button className={styles["play-btn"]}>BTN</button>

          {/* <button className={styles}>
            Pause
          </button> */}
        </div>
      </div>
      <CanvasComponent ref={canvasRef} />
      <div className="info">
        Name: {username}
        <br />
        Score: {score}
      </div>
    </div>
  );
}
