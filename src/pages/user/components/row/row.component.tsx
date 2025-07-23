import type { ReactNode } from "react";

import styles from "./row.module.css";

type Props = {
  key: string;
  value: string;
};

export default function RowComponent({ key, value }: Props): ReactNode {
  return (
    <div className={styles.row}>
      <div className={styles.key}>{key}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
}
