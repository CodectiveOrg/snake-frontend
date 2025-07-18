import type { ComponentPropsWithRef, ReactNode } from "react";

import styles from "./input.module.css";

type Props = ComponentPropsWithRef<"input">;

export default function InputComponent({
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={styles.input}>
      <input ref={ref} {...otherProps} />
    </div>
  );
}
