import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { usePaneCalculationHook } from "@/components/pane/hooks/use-pane-calculations.hooks.ts";

import styles from "./pane-shade.module.css";

type Props = SVGProps<SVGSVGElement> & {
  titleWidth: number;
  hasDent: boolean;
};

export default function PaneShadeComponent({
  titleWidth,
  hasDent,
  className,
  ...otherProps
}: Props): ReactNode {
  const { ref, viewBox, perimeterPath } = usePaneCalculationHook(
    titleWidth,
    hasDent,
    32,
  );

  return (
    <svg
      ref={ref}
      className={clsx(styles["pane-shade"], className)}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path className={styles.perimeter} d={perimeterPath} />
    </svg>
  );
}
