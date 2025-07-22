import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./high-score-frame.module.css";

type Props = SVGProps<SVGSVGElement>;

export default function HighScoreFrameComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <svg
      className={clsx(styles["high-score-frame"], className)}
      viewBox="0 0 272 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.pane}
        d="M253.027 0.5L230.649 58.5H18.9736L41.3516 0.5H253.027Z"
      />
      <path
        className={styles.perimeter}
        d="M31.6058 0H38.1465L15.6628 59H9.12207L31.6058 0Z"
      />
      <path
        className={styles.perimeter}
        d="M22.4837 0H29.0244L6.54071 59H0L22.4837 0Z"
      />
      <path
        className={styles.perimeter}
        d="M265.459 0H272L249.516 59H242.976L265.459 0Z"
      />
      <path
        className={styles.perimeter}
        d="M256.337 0H262.878L240.394 59H233.854L256.337 0Z"
      />
    </svg>
  );
}
