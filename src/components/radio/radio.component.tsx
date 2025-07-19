import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./radio.module.css";

type Props = Omit<ComponentProps<"input">, "type"> & {
  label: string;
};

export default function RadioComponent({
  label,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <label className={clsx(styles.radio, className)}>
      <input type="radio" {...otherProps} />
      {label}
    </label>
  );
}
