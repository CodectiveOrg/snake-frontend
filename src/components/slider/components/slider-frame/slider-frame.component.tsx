import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import styles from "./slider-frame.module.css";

type Props = SVGProps<SVGSVGElement>;

export default function SliderFrameComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <svg
      className={clsx(styles["slider-frame"], className)}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.perimeter}
        d="M14 4.21281L7.5 0.421143L1 4.21281V10.7872L7.5 14.5788L14 10.7872V4.21281Z"
      />
    </svg>
  );
}
