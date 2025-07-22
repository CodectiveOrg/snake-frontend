import type { ReactNode } from "react";

import { NavLink, type NavLinkProps } from "react-router";

import clsx from "clsx";

import styles from "./link-button.module.css";

type Props = NavLinkProps & {
  color?: "default" | "light";
  size?: "large" | "small";
};

export default function LinkButtonComponent({
  color = "default",
  size = "large",
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <NavLink
      className={clsx(
        styles["link-button"],
        styles[color],
        styles[size],
        className,
      )}
      {...otherProps}
    />
  );
}
