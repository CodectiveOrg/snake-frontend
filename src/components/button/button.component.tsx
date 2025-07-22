import type { ComponentProps, ReactNode } from "react";

import { NavLink, type NavLinkProps } from "react-router";

import clsx from "clsx";

import ButtonFrameComponent, {
  type ButtonFrameColor,
} from "@/components/button/components/button-frame/button-frame.component.tsx";

import styles from "./button.module.css";

type ButtonProps = { asType?: "button" } & ComponentProps<"button">;
type LinkProps = { asType: "link" } & NavLinkProps;

type Props = {
  color?: ButtonFrameColor;
  children?: ReactNode;
} & (ButtonProps | LinkProps);

export default function ButtonComponent({
  asType = "button",
  color,
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return asType === "button" ? (
    <button
      className={clsx(styles.button, className)}
      {...(otherProps as ButtonProps)}
    >
      <ButtonFrameComponent className={styles.frame} color={color} />
      {children}
    </button>
  ) : (
    <NavLink
      className={clsx(styles.button, className)}
      {...(otherProps as LinkProps)}
    >
      <ButtonFrameComponent className={styles.frame} color={color} />
      {children}
    </NavLink>
  );
}
