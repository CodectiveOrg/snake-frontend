import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { getLeaderboardApi } from "@/api/public/get-leaderboard.api.ts";

import ButtonComponent from "@/components/button/button.component";
import RibbonComponent from "@/components/ribbon/ribbon.component";
import TableComponent from "@/components/table/table.component";

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
