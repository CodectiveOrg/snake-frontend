import type { ReactNode } from "react";

import RadioComponent from "@/components/radio/radio.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "fit-content" }}>
        <RadioComponent label="Male" name="gender" />
        <RadioComponent label="Female" name="gender" />
      </main>
    </div>
  );
}
