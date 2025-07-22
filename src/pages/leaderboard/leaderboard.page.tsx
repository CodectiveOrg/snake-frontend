import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import ButtonComponent from "@/components/button/button.component";
import PaneComponent from "@/components/pane/pane.component";
import TableComponent from "@/components/table/table.component";

import styles from "./leaderboard.module.css";

const items = [
  {
    rank: 3,
    username: "Mohammmad",
    todayHighScore: 12,
    totalHighScore: 90,
  },
  {
    rank: 3,
    username: "Mohammmad",
    todayHighScore: 12,
    totalHighScore: 90,
  },
  {
    rank: 3,
    username: "Mohammmad",
    todayHighScore: 12,
    totalHighScore: 90,
  },
];

export default function LeaderboardPage(): ReactNode {
  const navigate = useNavigate();

  const backHandler = (): Promise<void> | void => navigate("/");

  return (
    <PaneComponent
      title="Board"
      contentClassName={styles.content}
      className={styles.leaderboard}
    >
      <div className={styles["user-image"]}>
        <img src="/images/user-picture-placeholder.webp" />
      </div>
      <TableComponent items={items} />
      <ButtonComponent onClick={backHandler}>Back</ButtonComponent>
    </PaneComponent>
  );
}
