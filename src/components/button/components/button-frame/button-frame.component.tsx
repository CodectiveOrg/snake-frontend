import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { useResizeObserver } from "@/hooks/use-resize-observer.ts";

import styles from "./button-frame.module.css";

export default function ButtonFrameComponent({
  className,
  ...props
}: SVGProps<SVGSVGElement>): ReactNode {
  const { ref, width, height } = useResizeObserver<SVGSVGElement>();

  const offset = 10;

  return (
    <svg
      ref={ref}
      className={clsx(styles["button-frame"], className)}
      viewBox={`-1 -1 ${width + 2} ${height + 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={styles.perimeter}
        d={`M0 0H${width - offset}L${width} ${offset}V${height}H${offset}L0 ${height - offset}Z`}
      />
    </svg>
  );
}
