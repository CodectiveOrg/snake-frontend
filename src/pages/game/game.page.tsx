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
      <CanvasComponent ref={canvasRef} />
      <div className="info">
        Name: <span id="name">{username}</span>
        <br />
        Score: <span id="score">{score}</span>
      </div>
    </div>
  );
}
