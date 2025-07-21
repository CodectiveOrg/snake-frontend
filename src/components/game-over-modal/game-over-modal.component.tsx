import { type ReactNode, useEffect, useRef } from "react";

import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { getLeaderboardApi } from "@/api/public/get-leaderboard.api.ts";

import ButtonComponent from "@/components/button/button.component";
import ModalComponent from "@/components/modal/modal.component.tsx";
import RibbonComponent from "@/components/ribbon/ribbon.component";
import TableComponent from "@/components/table/table.component";

import { useGameStore } from "@/stores/game.store.ts";

import styles from "./game-over-modal.module.css";

type Props = {
  onRestart: () => void;
  onExit: () => void;
};

export default function GameOverModalComponent({
  onRestart,
  onExit,
}: Props): ReactNode {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  const gameState = useGameStore((state) => state.gameState);

  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (gameState === "over") {
      modalRef.current?.showModal();
    }
  }, [gameState]);

  const restartButtonClickHandler = (): void => {
    modalRef.current?.close();
    onRestart();
  };

  if (isPending) {
    return <p className={styles.message}>Loading...</p>;
  }

  if (isError) {
    toast.error(error.message, {
      containerId: "modal",
      toastId: "leaderboard",
    });

    return <p className={styles.message}>Error: {error.message}</p>;
  }

  return (
    <ModalComponent
      ref={modalRef}
      title="Game Over"
      className={styles["game-over-modal"]}
    >
      <RibbonComponent>
        <div className={styles["ribbon-content"]}>
          <div>97</div>
          <div>Hamid</div>
          <div>44</div>
          <div>105</div>
        </div>
      </RibbonComponent>
      <TableComponent items={data} />
      <div className={styles["actions"]}>
        <ButtonComponent
          color="secondary"
          className={styles.button}
          onClick={onExit}
        >
          Exit
        </ButtonComponent>
        <ButtonComponent
          className={styles.button}
          onClick={restartButtonClickHandler}
        >
          Restart
        </ButtonComponent>
      </div>
    </ModalComponent>
  );
}
