import { type ReactNode, useEffect, useRef } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";
import SettingsContent from "@/components/settings-content/settings-content.component.tsx";

import styles from "./settings-modal.module.css";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function SettingsModalComponent({
  onConfirm,
  onCancel,
}: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const confirmHandler = (): void => {
    modalRef.current?.close();
    onConfirm();
  };

  const cancelHandler = (): void => {
    modalRef.current?.close();
    onCancel();
  };

  return (
    <ModalComponent
      ref={modalRef}
      className={styles["settings-modal"]}
      title="Settings"
    >
      <SettingsContent onConfirm={confirmHandler} onCancel={cancelHandler} />
    </ModalComponent>
  );
}
