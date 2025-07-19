import type { ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "fit-content" }}>
        <ButtonComponent>Resume</ButtonComponent>
        <ButtonComponent>Settings</ButtonComponent>
        <ButtonComponent>Exit</ButtonComponent>
      </main>
    </div>
  );
}
