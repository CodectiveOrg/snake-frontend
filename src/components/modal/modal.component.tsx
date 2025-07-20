import type { ComponentProps, ReactNode, Ref } from "react";

import PaneComponent from "@/components/pane/pane.component.tsx";

import styles from "./modal.module.css";

type Props = ComponentProps<typeof PaneComponent> & {
  ref: Ref<HTMLDialogElement>;
};

export default function ModalComponent({
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <dialog ref={ref} className={styles.modal}>
      <PaneComponent {...otherProps} />
    </dialog>
  );
}
