import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import styles from "./checkbox.module.css";

type Props = Omit<ComponentProps<"input">, "type"> & {
  label: string;
};

export default function CheckboxComponent({
  label,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <label className={clsx(styles.checkbox, className)}>
      <input type="checkbox" {...otherProps} />
      {label}
    </label>
  );
}
