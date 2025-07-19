import { type ReactNode } from "react";

import SliderComponent from "@/components/slider/slider.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "75rem" }}>
        <SliderComponent />
      </main>
    </div>
  );
}
