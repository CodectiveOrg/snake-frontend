import type { ReactNode, SVGProps } from "react";

import styles from "./pause.module.css";

type Props = SVGProps<SVGSVGElement>;

export default function PauseIcon({ ...otherProps }: Props): ReactNode {
  return (
    <svg
      className={styles.pause}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 31 37"
      fill="none"
      {...otherProps}
    >
      <rect width="13" height="37" rx="1" />
      <rect x="18" width="13" height="37" rx="1" />
    </svg>
  );
}
