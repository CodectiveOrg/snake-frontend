import ButtonComponent from "../button/button.component";
import TableComponent from "../table/table.component";

import styles from "./game-over-modal.module.css";

const items = [
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
  {
    rank: 4,
    username: "Hamid",
    todayHighScore: 80,
    totalHighScore: 120,
  },
];

export default function GameOverModalComponent() {
  return (
    <div className={styles["game-over-modal"]}>
      <div className={styles["user-board"]}></div>
      <TableComponent items={items} />
      <div className={styles["button-group"]}>
        <ButtonComponent color="secondary" className={styles.button}>
          EXIT
        </ButtonComponent>
        <ButtonComponent className={styles.button}>RESTART</ButtonComponent>
      </div>
    </div>
  );
}
