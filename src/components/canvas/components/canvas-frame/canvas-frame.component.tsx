import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import styles from "./canvas-frame.module.css";

type Props = SVGProps<SVGSVGElement>;

export default function CanvasFrameComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  const { ref, width, height } = useResizeObserverHook<SVGSVGElement>();

  const offset = Size.CANVAS_CORNER_OFFSET;
  const strokeWidth = Size.CANVAS_CORNER_WIDTH;

  return (
    <svg
      ref={ref}
      className={clsx(styles["canvas-frame"], className)}
      viewBox={`${-strokeWidth} ${-strokeWidth} ${width + 2 * strokeWidth} ${height + 2 * strokeWidth}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.perimeter}
        d={`M${offset} 0L0 ${offset}V${height - offset}L${offset} ${height}H${width - offset}L${width} ${height - offset}V${offset}L${width - offset} 0H${offset}Z`}
      />
      <path
        className={styles.corner}
        d={`M0 ${height / 2}V${height - offset}L${offset} ${height}H${height / 2}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M${width} ${height / 2}V${offset}L${width - offset} 0H${width - height / 2}`}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
