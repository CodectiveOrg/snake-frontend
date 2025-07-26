import type { ReactNode } from "react";

import type { GetLeaderboardResponseDto } from "@/dto/response/get-leaderboard.response.dto.ts";

import styles from "./top-players.module.css";

type Props = {
  players: GetLeaderboardResponseDto[];
};

export default function TopPlayersComponent({ players }: Props): ReactNode {
  return (
    <div className={styles["top-players"]}>
      {players.map((player) => (
        <div key={player.username} className={styles.player}>
          <img
            src={player.picture ?? "/images/user-picture-placeholder.webp"}
            alt="User's Profile Picture"
          />
          <div className={styles.overlay}>
            <span className={styles.username}>{player.username}</span>
            <span>{player.totalHighScore}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
