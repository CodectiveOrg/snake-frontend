import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { usePaneCalculationHook } from "@/components/pane/hooks/use-pane-calculations.hooks.ts";

import styles from "./pane-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  titleWidth: number;
};

export default function PaneFrameComponent({
  titleWidth,
  className,
  ...otherProps
}: Props): ReactNode {
  const {
    ref,
    strokeWidth,
    viewBox,
    perimeterPath,
    topLeftCornerPath,
    bottomLeftCornerPath,
    bottomRightCornerPath,
    topRightCornerPath,
  } = usePaneCalculationHook(titleWidth);

  return (
    <svg
      ref={ref}
      className={clsx(styles["pane-frame"], className)}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path className={styles.perimeter} d={perimeterPath} />
      <path
        className={styles.corner}
        d={topLeftCornerPath}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={bottomLeftCornerPath}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={bottomRightCornerPath}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={topRightCornerPath}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
