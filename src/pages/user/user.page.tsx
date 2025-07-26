import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component";
import PaneComponent from "@/components/pane/pane.component";

import RowComponent from "./components/row/row.component";

import styles from "./user.module.css";

export default function UserPage(): ReactNode {
  return (
    <div className={styles.user}>
      <PaneComponent
        shade
        className={styles.pane}
        contentClassName={styles.content}
        title="Player"
      >
        <div>
          <img
            className={styles.img}
            src="/images/user-picture-placeholder.webp"
            alt="Profile"
          />
        </div>
        <div>
          <RowComponent title="name" value="AK46" className={styles.bold} />
          <RowComponent title="ranking" value="43" />
          <RowComponent title="total score" value="808" />
          <RowComponent title="gender" value="male" className={styles.bold} />

          <ButtonComponent className={styles.button}>
            {" "}
            &lt;- Back
          </ButtonComponent>
        </div>
      </PaneComponent>
    </div>
  );
}
