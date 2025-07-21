import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./ribbon-frame.module.css";

type Props = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  width: number;
  height: number;
  largeOffset: number;
  smallOffset: number;
};

export default function RibbonFrameComponent({
  className,
  width,
  height,
  largeOffset,
  smallOffset,
  ...otherProps
}: Props): ReactNode {
  return (
    <svg
      className={clsx(styles["ribbon-frame"], className)}
      width={width + largeOffset}
      height={height + 12}
      viewBox={`-2 -8 ${width + largeOffset} ${height + 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={clsx(styles.corner, styles.small)}
        d={`M${width + largeOffset} -2H${width}L0 ${height / 2}L${width} ${height + 2}H${width + largeOffset}`}
      />
      <path
        className={clsx(styles.corner, styles.large)}
        d={`M${width + smallOffset} -4H${width}L0 ${height / 2}L${width} ${height + 4}H${width + smallOffset}`}
      />
    </svg>
  );
}
