import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import styles from "./button-frame.module.css";

export type ButtonFrameColor = "primary" | "secondary";

type Props = SVGProps<SVGSVGElement> & {
  color?: ButtonFrameColor;
};

export default function ButtonFrameComponent({
  color = "primary",
  className,
  ...otherProps
}: Props): ReactNode {
  const { ref, width, height } = useResizeObserverHook<SVGSVGElement>();

  const offset = 10;

  return (
    <svg
      ref={ref}
      className={clsx(styles["button-frame"], styles[color], className)}
      viewBox={`-1 -1 ${width + 2} ${height + 2}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.perimeter}
        d={`M0 0H${width - offset}L${width} ${offset}V${height}H${offset}L0 ${height - offset}Z`}
      />
    </svg>
  );
}
