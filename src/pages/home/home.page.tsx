import type { ReactNode } from "react";

import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component.tsx";

import styles from "./home.module.css";

const user = "DEAR USER";
export default function HomePage(): ReactNode {
  return (
    <div className={styles.home}>
      <PaneComponent title="Menu" className={styles.pane}>
        <div className={styles.username}>
          <span className={styles.prefix}>Hello, </span>
          {user}!
        </div>
        <div className={styles.menu}>
          <LinkButtonComponent to="/game">Start</LinkButtonComponent>
          <LinkButtonComponent to="/profile">Profile</LinkButtonComponent>
          <LinkButtonComponent to="/board">Board</LinkButtonComponent>
          <LinkButtonComponent to="/settings">Settings</LinkButtonComponent>
          <LinkButtonComponent to="/exit">Exit</LinkButtonComponent>
        </div>
      </PaneComponent>
    </div>
  );
}
