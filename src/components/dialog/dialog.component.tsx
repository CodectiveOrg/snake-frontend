import type { ComponentProps, ReactNode, Ref } from "react";

import XyzComponent from "@/components/xyz/xyz.component.tsx";

import styles from "./dialog.module.css";

type Props = ComponentProps<typeof XyzComponent> & {
  ref: Ref<HTMLDialogElement>;
};

export default function DialogComponent({
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <dialog ref={ref} className={styles.dialog}>
      <XyzComponent {...otherProps} />
    </dialog>
  );
}
