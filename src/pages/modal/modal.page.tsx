import { type ReactNode, useRef } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import ModalComponent from "@/components/modal/modal.component.tsx";

import styles from "./modal.module.css";

export default function ModalPage(): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openButtonClickHandler = () => {
    modalRef.current?.showModal();
  };

  const closeButtonClickHandler = () => {
    modalRef.current?.close();
  };

  return (
    <div className={styles.modal}>
      <ButtonComponent onClick={openButtonClickHandler}>
        Open Modal
      </ButtonComponent>
      <ModalComponent ref={modalRef} title="Settings">
        <p>Hello, friend!</p>
        <ButtonComponent onClick={closeButtonClickHandler}>
          Close
        </ButtonComponent>
      </ModalComponent>
    </div>
  );
}
