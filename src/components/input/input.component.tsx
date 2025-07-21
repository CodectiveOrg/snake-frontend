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
      <FrameLeft className={clsx(styles.frame, styles.left)} />
      <input ref={ref} {...otherProps} />
      <FrameRight className={clsx(styles.frame, styles.right)} />
    </div>
  );
}

function FrameRight({ ...otherProps }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="72"
      height="74"
      viewBox="0 0 72 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M15.9527 15.8114L51.7713 15.8117L63.0547 37.812L51.7713 60.0621L18.4043 60.0621"
        stroke="#2E6DFF"
        stroke-width="2"
      />
      <path
        d="M30.0005 14.7474L52.6671 14.7483L64.7324 38.2893L52.6671 61L31.5 61"
        stroke="#2E6DFF"
        stroke-width="4"
      />
    </svg>
  );
}

function FrameLeft({ ...otherProps }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="71"
      height="74"
      viewBox="0 0 71 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M55.3168 15.1176L19.4983 15.118L8.21479 37.4349L19.4983 60.0051L52.8653 60.0051"
        stroke="#2E6DFF"
        stroke-width="2"
      />
      <path
        d="M41.269 14.038L18.6024 14.0388L6.53718 37.9186L18.6024 60.9561L39.7695 60.9561"
        stroke="#2E6DFF"
        stroke-width="4"
      />
    </svg>
  );
}
