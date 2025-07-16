import type { ReactNode } from "react";

import styles from "./Intro.module.css";

function Intro(): ReactNode {
  return (
    <div className={styles.intro}>
      <h1>This is Intro Page</h1>
    </div>
  );
}

export default Intro;
