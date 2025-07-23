import type { ReactNode } from "react";

import PaneComponent from "@/components/pane/pane.component";

import styles from "./user.module.css";

export default function UserPage(): ReactNode {
  return (
    <div className={styles.user}>
      <PaneComponent title="Player">
        <div className={styles.wrapper}>
          <div>
            <img
              className={styles.img}
              src="images/user-picture-placeholder.webp"
              alt="Profile"
            />
          </div>
          <div></div>
        </div>
      </PaneComponent>
    </div>
  );
}
