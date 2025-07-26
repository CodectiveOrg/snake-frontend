import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import { useQuery } from "@tanstack/react-query";

import clsx from "clsx";

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

  const backButtonClickHandler = (): void => {
    navigate("/");
  };

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
            <div className={styles["top-players"]}>
              {data.slice(1, 4).map((player, index) => (
                <div
                  key={index}
                  className={clsx(
                    styles.player,
                    styles[`player-${["one", "two", "three"][index]}`],
                  )}
                >
                  <div className={styles["image-box"]}>
                    <img src="/images/user-picture-placeholder.webp" />
                  </div>
                  <div className={styles.overlay}>
                    <span className={styles.username}>{player.username}</span>
                    <span>{player.totalHighScore}</span>
                  </div>
                </div>
              ))}
            </div>
            <TableComponent items={data.slice(1)} />
            <div className={styles.actions}>
              <ButtonComponent onClick={backButtonClickHandler}>
                {"<-"} Back
              </ButtonComponent>
            </div>
          </>
        )}
      </PaneComponent>
    </div>
  );
}
