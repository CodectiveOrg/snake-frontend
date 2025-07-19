import type { ReactNode } from "react";

import ModalFrameComponent from "@/components/modal/components/modal-frame/modal-frame.component.tsx";

import styles from "./modal.module.css";

export default function ModalComponent(): ReactNode {
  return (
    <div className={styles.modal}>
      <ModalFrameComponent
        className={styles.frame}
        width={200}
        height={100}
        contentWidth={60}
      />
      <div className={styles.content}>
        <h1>SETTINGS</h1>
      </div>
    </div>
  );
}
