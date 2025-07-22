import type { ReactNode } from "react";

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
];

export default function LeaderboardPage(): ReactNode {
  return (
    <PaneComponent title="Board" className={styles.leaderboard}>
      <TableComponent items={items} />
    </PaneComponent>
  );
}
