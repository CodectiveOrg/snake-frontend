import type { ReactNode } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main>
        <ModalComponent title="Settings">
          <p>This is the content!</p>
        </ModalComponent>
      </main>
    </div>
  );
}
