import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { getLeaderboardApi } from "@/api/public/get-leaderboard.api.ts";

import ButtonComponent from "../button/button.component";
import TableComponent from "../table/table.component";

import styles from "./game-over-modal.module.css";

type Props = {
  restartGame: () => void;
  exitGame: () => void;
};

export default function GameOverModalComponent({
  restartGame,
  exitGame,
}: Props): ReactNode {
  const { data, isPending, isError } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  if (isPending) {
    return <p className={styles.message}>Loading...</p>;
  }

  if (isError) {
    return <p className={styles.message}>Error...</p>;
  }

  return (
    <div className={styles["game-over-modal"]}>
      <div className={styles["user-board"]}></div>
      <TableComponent items={data} />
      <div className={styles["button-group"]}>
        <ButtonComponent
          color="secondary"
          className={styles.button}
          onClick={exitGame}
        >
          EXIT
        </ButtonComponent>
        <ButtonComponent className={styles.button} onClick={restartGame}>
          RESTART
        </ButtonComponent>
      </div>
    </div>
  );
}
