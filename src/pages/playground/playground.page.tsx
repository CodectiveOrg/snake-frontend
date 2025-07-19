import type { ReactNode } from "react";

import LinkButtonComponent from "@/components/link-button/link-button.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main style={{ display: "grid", gap: "1rem", width: "fit-content" }}>
        <LinkButtonComponent to="/settings">Resume</LinkButtonComponent>
        <LinkButtonComponent to="/settings">Settings</LinkButtonComponent>
        <LinkButtonComponent to="/settings">Exit</LinkButtonComponent>
      </main>
    </div>
  );
}
