import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./high-score-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  highScoreWidth: number;
};

export default function HighScoreFrameComponent({
  highScoreWidth,
  className,
  ...otherProps
}: Props): ReactNode {
  const extraWidth = highScoreWidth - 30;

  return (
    <svg
      className={clsx(styles["high-score-frame"], className)}
      style={{
        width: `${120 + extraWidth}px`,
        height: "59px",
      }}
      viewBox={`0 0 ${120 + extraWidth} 59`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.pane}
        d={`M${101.027 + extraWidth} 0.5L${78.649 + extraWidth} 58.5H18.9736L41.3516 0.5H${101.027 + extraWidth}Z`}
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
        d={`M${113.459 + extraWidth} 0H${120 + extraWidth}L${97.516 + extraWidth} 59H${90.976 + extraWidth}L${113.459 + extraWidth} 0Z`}
      />
      <path
        className={styles.perimeter}
        d={`M${104.337 + extraWidth} 0H${110.878 + extraWidth}L${88.394 + extraWidth} 59H${81.854 + extraWidth}L${104.337 + extraWidth} 0Z`}
      />
    </svg>
  );
}
