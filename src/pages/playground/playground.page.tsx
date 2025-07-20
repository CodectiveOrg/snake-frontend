import { type ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main
        style={{
          display: "grid",
          gap: "1rem",
          width: "75rem",
          height: "30rem",
        }}
      >
        <PaneComponent title="Settings">
          <ButtonComponent>Confirm</ButtonComponent>
          <ButtonComponent color="secondary">Cancel</ButtonComponent>
        </PaneComponent>
      </main>
    </div>
  );
}
