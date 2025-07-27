import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { getLeaderboardApi } from "@/api/history/get-leaderboard.api";

import ButtonComponent from "@/components/button/button.component";
import PaneComponent from "@/components/pane/pane.component";
import TableComponent from "@/components/table/table.component";

import TopPlayersComponent from "./components/top-players/top-players.component.tsx";

import styles from "./leaderboard.module.css";

export default function LeaderboardPage(): ReactNode {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  return (
    <div className={styles.leaderboard}>
      <PaneComponent
        shade
        className={styles.pane}
        contentClassName={styles.content}
        title="Board"
      >
        {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <>
            <TopPlayersComponent players={data?.slice(1, 4)} />
            <TableComponent items={data.slice(1)} />
            <div className={styles.actions}>
              <ButtonComponent asType="link" to="/">
                {"<-"} Back
              </ButtonComponent>
            </div>
          </>
        )}
      </PaneComponent>
    </div>
  );
}
