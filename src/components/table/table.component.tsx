import type { ReactNode } from "react";

import clsx from "clsx";

import type { GetLeaderboardResponseDto } from "@/dto/response/get-leaderboard.response.dto.ts";

import styles from "./table.module.css";

type Props = {
  items: GetLeaderboardResponseDto[];
  className?: string;
};

export default function TableComponent({ items, className }: Props): ReactNode {
  return (
    <div className={clsx(styles.table, className)}>
      <div className={styles.head}>
        <div className={styles.row}>
          <div className={styles.cell}>Rank</div>
          <div className={styles.cell}>Player</div>
          <div className={styles.cell}>Today</div>
          <div className={styles.cell}>Total</div>
        </div>
      </div>
      <div className={styles.body}>
        {items.map((item, index) => (
          <div key={index} className={styles.row}>
            <div className={styles.cell}>{item.rank}</div>
            <div className={clsx(styles.cell, styles.username)}>
              {item.username}
            </div>
            <div className={styles.cell}>{item.todayHighScore}</div>
            <div className={styles.cell}>{item.totalHighScore}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
