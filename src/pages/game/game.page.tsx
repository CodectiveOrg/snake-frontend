import { type ReactNode, useEffect, useRef } from "react";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";
import GameOverModalComponent from "@/components/game-over-modal/game-over-modal.component";
import ModalComponent from "@/components/modal/modal.component";

import { GameMasterService } from "@/services/game-master.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const username = localStorage.getItem("username");

  const score = useGameStore((state) => state.score);

  const masterRef = useRef<GameMasterService>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (masterRef.current || !canvasRef.current || !modalRef.current) {
      return;
    }

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
      <ModalComponent title="GAME OVER" ref={modalRef}>
        <GameOverModalComponent />
      </ModalComponent>
    </div>
  );
}
