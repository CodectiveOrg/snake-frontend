import { type ReactNode, useEffect, useRef, useState } from "react";

import MenuComponent from "@/components/menu/menu.component.tsx";
import ModalComponent from "@/components/modal/modal.component.tsx";
import SettingsModalComponent from "@/components/settings-modal/settings-modal.component.tsx";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./pause-modal.module.css";

export default function PauseModalComponent(): ReactNode {
  const gameState = useGameStore((state) => state.gameState);
  const play = useGameStore((state) => state.play);

  const [isSettingsModalOpen, setIsSettingsModalOpen] =
    useState<boolean>(false);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (gameState === "paused") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [gameState]);

  const settingsButtonClickHandler = (): void => {
    setIsSettingsModalOpen(true);
  };

  const settingsModalActionHandler = (): void => {
    setIsSettingsModalOpen(false);
  };

  return (
    <ModalComponent
      ref={modalRef}
      className={styles["pause-modal"]}
      contentClassName={styles.content}
      title="Pause"
    >
      <MenuComponent
        items={[
          {
            asType: "button",
            onClick: play,
            children: "Continue",
          },
          {
            asType: "button",
            onClick: settingsButtonClickHandler,
            children: "Settings",
          },
          { to: "/", children: "Exit" },
        ]}
      />
      {isSettingsModalOpen && (
        <SettingsModalComponent
          onConfirm={settingsModalActionHandler}
          onCancel={settingsModalActionHandler}
        />
      )}
    </ModalComponent>
  );
}
