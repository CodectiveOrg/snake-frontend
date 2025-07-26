import type { ReactNode, SVGProps } from "react";

import styles from "./play.module.css";

type Props = SVGProps<SVGSVGElement>;

export default function PlayIcon({ ...otherProps }: Props): ReactNode {
  return (
    <svg
      className={styles.play}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 71 62"
      fill="none"
      {...otherProps}
    >
      <rect width="71" height="62" rx="18" fill="#D9D9D9" fill-opacity="0.21" />
      <path
        d="M55.7633 30.1697C56.3534 30.5659 56.3534 31.4341 55.7633 31.8303L26.3074 51.6051C25.6431 52.0511 24.75 51.575 24.75 50.7748L24.75 11.2251C24.75 10.425 25.643 9.9489 26.3074 10.3949L55.7633 30.1697Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
