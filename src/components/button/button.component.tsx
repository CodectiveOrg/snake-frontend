import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import ButtonFrameComponent from "@/components/button/components/button-frame/button-frame.component.tsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button">;

export default function ButtonComponent({
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button className={clsx(styles["button"], className)} {...otherProps}>
      <ButtonFrameComponent className={styles.frame} />
      {children}
    </button>
  );
}
