import { type ReactNode, useEffect, useRef } from "react";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";

import { GameMaster } from "@/entities/game-master.ts";

import styles from "./game.module.css";

export default function GamePage(): ReactNode {
  const username = localStorage.getItem("username");

  const masterRef = useRef<GameMaster>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (masterRef.current || !canvasRef.current) {
      return;
    }

    masterRef.current = new GameMaster(canvasRef.current);
    masterRef.current.run();
  }, []);

  return (
    <div className={styles.game}>
      <CanvasComponent ref={canvasRef} />
      <div className="info">
        Name: <span id="name">{username}</span>
        <br />
        Score: <span id="score">{masterRef.current?.score}</span>
      </div>
    </div>
  );
}
