import { type ReactNode, useEffect, useRef } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./pause-modal.module.css";

type Props = {
  username: string;
  // onContinue: () => void;
  // onExit: () => void;
};

export default function PauseModalComponent({
  username,
  // onContinue,
  // onExit,
}: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const gameState = useGameStore((state) => state.gameState);

  useEffect(() => {
    if (gameState === "paused") {
      modalRef.current?.showModal();
    }
  }, [gameState]);

  return (
    <div className={styles["pause-modal"]}>
      <ModalComponent ref={modalRef} title="pause">
        <div className={styles.greetings}>Hello {username}</div>
      </ModalComponent>
    </div>
  );
}
