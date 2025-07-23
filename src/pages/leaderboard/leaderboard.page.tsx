import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { getLeaderboardApi } from "@/api/history/get-leaderboard.api";

import ButtonComponent from "@/components/button/button.component";
import PaneComponent from "@/components/pane/pane.component";
import TableComponent from "@/components/table/table.component";

import styles from "./leaderboard.module.css";

export default function LeaderboardPage(): ReactNode {
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  const backHandler = (): Promise<void> | void => navigate("/");

  return (
    <div className={styles.leaderboard}>
      <PaneComponent
        title="Board"
        contentClassName={styles.content}
        className={styles.pane}
        shade={true}
      >
        {isPending ? (
          <p className={styles.message}>Loading...</p>
        ) : isError ? (
          <p className={styles.message}>Error: {error.message}</p>
        ) : (
          <>
            <div className={styles["image-container"]}>
              <div className={styles["image-box"]}>
                <img src="/images/user-picture-placeholder.webp" />
              </div>
              <div className={styles["image-overlay"]}>
                <span className={styles.username}>{data[0].username}</span>
                <span>{data[0].totalHighScore}</span>
              </div>
            </div>
            <TableComponent items={data.slice(1)} />
            <ButtonComponent onClick={backHandler}>Back</ButtonComponent>
          </>
        )}
      </PaneComponent>
    </div>
  );
}
