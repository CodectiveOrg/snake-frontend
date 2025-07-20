import { type ReactNode, useRef } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import DialogComponent from "@/components/dialog/dialog.component.tsx";

import styles from "./dialog.module.css";

export default function DialogPage(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openButtonClickHandler = () => {
    dialogRef.current?.showModal();
  };

  const closeButtonClickHandler = () => {
    dialogRef.current?.close();
  };

  return (
    <div className={styles.dialog}>
      <ButtonComponent onClick={openButtonClickHandler}>
        Open Dialog
      </ButtonComponent>
      <DialogComponent ref={dialogRef} title="Settings">
        <p>Hello, friend!</p>
        <ButtonComponent onClick={closeButtonClickHandler}>
          Close
        </ButtonComponent>
      </DialogComponent>
    </div>
  );
}
