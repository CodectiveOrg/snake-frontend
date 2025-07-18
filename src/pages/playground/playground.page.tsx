import type { ReactNode } from "react";

import InputComponent from "@/components/input/input.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main>
        <InputComponent />
      </main>
    </div>
  );
}
