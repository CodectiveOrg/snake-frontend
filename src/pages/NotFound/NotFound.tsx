import type { ReactNode } from "react";

import styles from "./NotFound.module.css";

function NotFound(): ReactNode {
  return (
    <div className={styles["not-found"]}>
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  );
}

export default NotFound;
