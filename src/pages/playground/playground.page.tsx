import { type ReactNode } from "react";

import TableComponent from "@/components/table/table.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "75rem" }}>
        <TableComponent
          items={[
            {
              rank: 1,
              username: "BijanProgrammer",
              todayHighScore: 23,
              totalHighScore: 815,
            },
            {
              rank: 2,
              username: "AK47",
              todayHighScore: 0,
              totalHighScore: 316,
            },
            {
              rank: 3,
              username: "SMAmini",
              todayHighScore: 0,
              totalHighScore: 108,
            },
            {
              rank: 4,
              username: "ZZare",
              todayHighScore: 8,
              totalHighScore: 42,
            },
            {
              rank: 5,
              username: "MAli",
              todayHighScore: 0,
              totalHighScore: 23,
            },
            {
              rank: 6,
              username: "MAliKH",
              todayHighScore: 15,
              totalHighScore: 16,
            },
            {
              rank: 7,
              username: "Mhmmdi",
              todayHighScore: 4,
              totalHighScore: 15,
            },
            {
              rank: 8,
              username: "Mazaheri",
              todayHighScore: 0,
              totalHighScore: 8,
            },
            {
              rank: 9,
              username: "Vishk",
              todayHighScore: 0,
              totalHighScore: 4,
            },
            {
              rank: 10,
              username: "AEghtedar",
              todayHighScore: 0,
              totalHighScore: 0,
            },
          ]}
        />
      </main>
    </div>
  );
}
