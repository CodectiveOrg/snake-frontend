import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";

import ButtonFrameComponent, {
  type ButtonFrameColor,
} from "@/components/button/components/button-frame/button-frame.component.tsx";

import styles from "./button.module.css";

type Props = ComponentProps<"button"> & {
  color?: ButtonFrameColor;
};

export default function ButtonComponent({
  color,
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button className={clsx(styles["button"], className)} {...otherProps}>
      <ButtonFrameComponent className={styles.frame} color={color} />
      {children}
    </button>
  );
}
