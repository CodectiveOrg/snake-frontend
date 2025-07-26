import { type ReactNode, useEffect, useRef } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import ModalComponent from "@/components/modal/modal.component.tsx";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./pause-modal.module.css";

export default function PauseModalComponent(): ReactNode {
  const gameState = useGameStore((state) => state.gameState);
  const play = useGameStore((state) => state.play);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (gameState === "paused") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [gameState]);

  return (
    <ModalComponent
      ref={modalRef}
      className={styles["pause-modal"]}
      contentClassName={styles.content}
      title="Pause"
    >
      <p>Pause</p>
      <ButtonComponent onClick={play}>Close</ButtonComponent>
    </ModalComponent>
  );
}
