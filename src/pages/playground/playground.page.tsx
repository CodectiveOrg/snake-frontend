import type { ReactNode } from "react";

import { toast } from "sonner";

import ButtonComponent from "@/components/button/button.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "fit-content" }}>
        <ButtonComponent onClick={() => toast("Hello, friend!")}>
          Toast
        </ButtonComponent>
      </main>
    </div>
  );
}
