import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import styles from "./ribbon-frame.module.css";

type Props = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  indentWidth: number;
  largeOffset: number;
  smallOffset: number;
};

export default function RibbonFrameComponent({
  className,
  indentWidth,
  largeOffset,
  smallOffset,
  ...otherProps
}: Props): ReactNode {
  const { ref, height } = useResizeObserverHook<SVGSVGElement>();

  return (
    <svg
      ref={ref}
      className={clsx(styles["ribbon-frame"], className)}
      viewBox={`-2 -4 ${indentWidth + largeOffset + 4} ${height + 8}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={clsx(styles.corner, styles.small)}
        d={`M${indentWidth + largeOffset} 0H${indentWidth}L0 ${height / 2}L${indentWidth} ${height}H${indentWidth + largeOffset}`}
      />
      <path
        className={clsx(styles.corner, styles.large)}
        d={`M${indentWidth + smallOffset} -1H${indentWidth}L0 ${height / 2}L${indentWidth} ${height + 1}H${indentWidth + smallOffset}`}
      />
    </svg>
  );
}
