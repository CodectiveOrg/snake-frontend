import type { ReactNode } from "react";

import PauseIcon from "@/icons/pause/pause.icon.tsx";
import PlayIcon from "@/icons/play/play.icon.tsx";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./pause-button.module.css";

export default function PauseButtonComponent(): ReactNode {
  const gameState = useGameStore((state) => state.gameState);
  const play = useGameStore((state) => state.play);
  const pause = useGameStore((state) => state.pause);

  const togglePauseButtonClickHandler = () => {
    if (gameState === "playing") {
      pause();
    } else {
      play();
    }
  };

  return (
    <button
      className={styles["pause-button"]}
      onClick={togglePauseButtonClickHandler}
    >
      {gameState === "playing" ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}
