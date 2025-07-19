import { type ReactNode, useRef } from "react";

import CanvasComponent from "@/components/canvas/canvas.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  const ref = useRef<HTMLCanvasElement>(null);

  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "75rem" }}>
        <CanvasComponent ref={ref} />
      </main>
    </div>
  );
}
