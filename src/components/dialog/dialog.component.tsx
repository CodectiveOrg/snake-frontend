import type { ComponentProps, ReactNode, Ref } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";

import styles from "./dialog.module.css";

type Props = ComponentProps<typeof ModalComponent> & {
  ref: Ref<HTMLDialogElement>;
};

export default function DialogComponent({
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <dialog ref={ref} className={styles.dialog}>
      <ModalComponent {...otherProps} />
    </dialog>
  );
}
