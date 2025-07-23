import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./row.module.css";

type Props = {
  title: string;
  value: string;
  className?: string;
};

export default function RowComponent({
  title,
  value,
  className,
}: Props): ReactNode {
  return (
    <div className={styles.row}>
      <div className={styles.title}>{title}</div>
      <div className={clsx(styles.value, className)}>{value}</div>
    </div>
  );
}
