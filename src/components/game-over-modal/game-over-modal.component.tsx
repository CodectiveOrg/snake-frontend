import { type ReactNode, useEffect, useRef } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { createHistoryApi } from "@/api/history/create-history.api.ts";
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
  const score = useGameStore((state) => state.score);

  const modalRef = useRef<HTMLDialogElement>(null);

  const isSubmitted = useRef<boolean>(false);

  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  const { mutate } = useMutation({
    mutationKey: ["create-history"],
    mutationFn: createHistoryApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({
        queryKey: ["leaderboard", "stats"],
      });
      toast.success(result.message);
    },
  });

  useEffect(() => {
    if (gameState === "over" && !isSubmitted.current) {
      isSubmitted.current = true;
      mutate({ score });

      modalRef.current?.showModal();
    }
  }, [gameState, mutate, score]);

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
