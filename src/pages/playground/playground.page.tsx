import { type ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import ModalComponent from "@/components/modal/modal.component.tsx";

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
        <ModalComponent title="Settings">
          <ButtonComponent>Confirm</ButtonComponent>
          <ButtonComponent color="secondary">Cancel</ButtonComponent>
        </ModalComponent>
      </main>
    </div>
  );
}
