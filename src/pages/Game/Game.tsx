import type { ReactNode } from "react";

import styles from "./Game.module.css";

function Game(): ReactNode {
  return (
    <div className={styles.game}>
      <h1>This is Game Page</h1>
    </div>
  );
}

export default Game;
