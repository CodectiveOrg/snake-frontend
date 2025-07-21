import type { ComponentPropsWithRef, ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./input.module.css";

type Props = ComponentPropsWithRef<"input">;

export default function InputComponent({
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={styles.input}>
      <InputFrameComponent
        width={12}
        height={44}
        largeOffset={36}
        smallOffset={24}
        className={clsx(styles.frame, styles.left)}
      />
      <input ref={ref} {...otherProps} />
      <InputFrameComponent
        width={12}
        height={44}
        largeOffset={36}
        smallOffset={24}
        className={clsx(styles.frame, styles.right)}
      />
    </div>
  );
}

type P = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  width: number;
  height: number;
  largeOffset: number;
  smallOffset: number;
};

function InputFrameComponent({
  width,
  height,
  largeOffset,
  smallOffset,
  ...otherProps
}: P) {
  return (
    <svg
      width={width + largeOffset}
      height={height + 12}
      viewBox={`-2 -8 ${width + largeOffset} ${height + 16}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d={`M${width + largeOffset} -2H${width}L0 ${height / 2}L${width} ${height + 2}H${width + largeOffset}`}
        stroke="#2E6DFF"
        strokeWidth="2"
      />
      <path
        d={`M${width + smallOffset} -4H${width}L0 ${height / 2}L${width} ${height + 4}H${width + smallOffset}`}
        stroke="#2E6DFF"
        strokeWidth="4"
      />
      {/*<path*/}
      {/*  d="M30.0005 14.7474L52.6671 14.7483L64.7324 38.2893L52.6671 61L31.5 61"*/}
      {/*  stroke="#2E6DFF"*/}
      {/*  strokeWidth="4"*/}
      {/*/>*/}
    </svg>
  );
}
