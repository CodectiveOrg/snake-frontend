import type { ReactNode } from "react";

import clsx from "clsx";

import type { GetUserPublicInfoResponseDto } from "@/dto/response/get-user-public-info.response.dto.ts";

import styles from "./stats.module.css";

type Props = {
  stats: GetUserPublicInfoResponseDto;
};

export default function StatsComponent({ stats }: Props): ReactNode {
  return (
    <div className={styles.stats}>
      <div className={styles.row}>
        <div className={styles.title}>Name</div>
        <div className={clsx(styles.value, styles.text, styles.ellipsis)}>
          {stats.username}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Ranking</div>
        <div className={clsx(styles.value, styles.number)}>{stats.rank}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Total Score</div>
        <div className={clsx(styles.value, styles.number)}>
          {stats.highScore}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.title}>Gender</div>
        <div className={clsx(styles.value, styles.text, styles.uppercase)}>
          {stats.gender}
        </div>
      </div>
    </div>
  );
}
