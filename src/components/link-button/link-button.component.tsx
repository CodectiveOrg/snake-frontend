import type { ComponentProps, ReactNode } from "react";

import { NavLink, type NavLinkProps } from "react-router";

import clsx from "clsx";

import styles from "./link-button.module.css";

type ButtonProps = { asType?: "button" } & ComponentProps<"button">;
type LinkProps = { asType: "link" } & NavLinkProps;

type Props = {
  color?: "default" | "light";
  size?: "large" | "small";
  active?: boolean;
  children?: ReactNode;
} & (ButtonProps | LinkProps);

export default function LinkButtonComponent({
  asType = "link",
  color = "default",
  size = "large",
  active = false,
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  const classNames = clsx(
    styles["link-button"],
    styles[color],
    styles[size],
    active && styles.active,
    className,
  );

  return asType === "button" ? (
    <button className={classNames} {...(otherProps as ButtonProps)}>
      {children}
    </button>
  ) : (
    <NavLink className={classNames} {...(otherProps as LinkProps)}>
      {children}
    </NavLink>
  );
}
