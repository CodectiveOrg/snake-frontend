import type { ReactNode } from "react";
import React from "react";

import { useNavigate } from "react-router";

import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { getLeaderboardApi } from "@/api/public/get-leaderboard.api.ts";

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

  const pendingMessage = (): React.JSX.Element | undefined => {
    return <p className={styles.message}>Loading...</p>;
  };

  const errorMessage = (): React.JSX.Element | undefined => {
    if (isError) {
      toast.error(error.message, {
        containerId: "modal",
        toastId: "user-rank",
      });

      return <p className={styles.message}>Error: {error.message}</p>;
    }
  };

  return (
    <PaneComponent
      title="Board"
      contentClassName={styles.content}
      className={styles.leaderboard}
    >
      {isPending ? (
        pendingMessage()
      ) : isError ? (
        errorMessage()
      ) : (
        <React.Fragment>
          <div className={styles["user-image"]}>
            <img src="/images/user-picture-placeholder.webp" />
          </div>
          <TableComponent items={data} />
          <ButtonComponent onClick={backHandler}>Back</ButtonComponent>
        </React.Fragment>
      )}
    </PaneComponent>
  );
}
