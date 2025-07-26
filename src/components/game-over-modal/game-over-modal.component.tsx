import { type ReactNode, useEffect, useRef } from "react";

import { useQuery } from "@tanstack/react-query";

import { getLeaderboardApi } from "@/api/history/get-leaderboard.api.ts";

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
  const gameState = useGameStore((state) => state.gameState);

  const modalRef = useRef<HTMLDialogElement>(null);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  useEffect(() => {
    if (gameState === "over") {
      modalRef.current?.showModal();
    }
  }, [gameState]);

  const restartButtonClickHandler = (): void => {
    modalRef.current?.close();
    onRestart();
  };

  return (
    <ModalComponent
      ref={modalRef}
      className={styles["game-over-modal"]}
      contentClassName={styles.content}
      title="Game Over"
    >
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <RibbonComponent contentClassName={styles.ribbon}>
            <div>{data[0].rank}</div>
            <div className={styles.username}>{data[0].username}</div>
            <div>{data[0].todayHighScore}</div>
            <div>{data[0].totalHighScore}</div>
          </RibbonComponent>
          <TableComponent items={data.slice(1)} />
          <div className={styles.actions}>
            <ButtonComponent color="secondary" onClick={onExit}>
              Exit
            </ButtonComponent>
            <ButtonComponent onClick={restartButtonClickHandler}>
              Restart
            </ButtonComponent>
          </div>
        </>
      )}
    </ModalComponent>
  );
}
