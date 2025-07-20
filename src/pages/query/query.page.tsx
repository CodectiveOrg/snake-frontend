import type { ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import { getLeaderboardApi } from "@/api/public/get-leaderboard.api.ts";

import PaneComponent from "@/components/pane/pane.component.tsx";

import styles from "./query.module.css";

export default function QueryPage(): ReactNode {
  const { data, isPending, isError } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboardApi,
  });

  if (isPending) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error...</>;
  }

  return (
    <div className={styles.query}>
      <PaneComponent title="Leaderboard">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>High Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.username}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.highScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PaneComponent>
    </div>
  );
}
