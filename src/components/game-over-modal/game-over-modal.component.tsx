import React, { type ReactNode, useEffect, useRef } from "react";

import { useQueries } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { getUserRankApi } from "@/api/history/get-user-rank.api";
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
  const gameState = useGameStore((state) => state.gameState);

  const modalRef = useRef<HTMLDialogElement>(null);

  const [userRankQuery, leaderboardQuery] = useQueries({
    queries: [
      {
        queryKey: ["user-rank"],
        queryFn: getUserRankApi,
      },
      {
        queryKey: ["leaderboard"],
        queryFn: getLeaderboardApi,
      },
    ],
  });

  const {
    data: userRankData,
    isPending: userRankPending,
    isError: userRankError,
    error: userRankErrorMessage,
  } = userRankQuery;

  const {
    data: leaderboardData,
    isPending: leaderboardPending,
    isError: leaderboardError,
    error: leaderboardErrorMessage,
  } = leaderboardQuery;

  useEffect(() => {
    if (gameState === "over") {
      modalRef.current?.showModal();
    }
  }, [gameState]);

  const restartButtonClickHandler = (): void => {
    modalRef.current?.close();
    onRestart();
  };

  const pendingMessage = (): React.JSX.Element | undefined => {
    return <p className={styles.message}>Loading...</p>;
  };

  const errorMessage = (): React.JSX.Element | undefined => {
    if (userRankError) {
      toast.error(userRankErrorMessage.message, {
        containerId: "modal",
        toastId: "user-rank",
      });

      return (
        <p className={styles.message}>Error: {userRankErrorMessage.message}</p>
      );
    }

    if (leaderboardError) {
      toast.error(leaderboardErrorMessage.message, {
        containerId: "modal",
        toastId: "leaderboard",
      });

      return (
        <p className={styles.message}>
          Error: {leaderboardErrorMessage.message}
        </p>
      );
    }
  };

  return (
    <ModalComponent
      ref={modalRef}
      className={styles["game-over-modal"]}
      contentClassName={styles.content}
      title="Game Over"
    >
      {leaderboardPending || userRankPending ? (
        pendingMessage()
      ) : userRankError || leaderboardError ? (
        errorMessage()
      ) : (
        <React.Fragment>
          <RibbonComponent contentClassName={styles.ribbon}>
            <div>{userRankData.rank}</div>
            <div>{userRankData.username}</div>
            <div>{userRankData.todayHighScore}</div>
            <div>{userRankData.totalHighScore}</div>
          </RibbonComponent>
          <TableComponent items={leaderboardData} />
          <div className={styles.actions}>
            <ButtonComponent color="secondary" onClick={onExit}>
              Exit
            </ButtonComponent>
            <ButtonComponent onClick={restartButtonClickHandler}>
              Restart
            </ButtonComponent>
          </div>
        </React.Fragment>
      )}
    </ModalComponent>
  );
}
