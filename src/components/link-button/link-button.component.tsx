import type { ReactNode } from "react";

import { NavLink, type NavLinkProps } from "react-router";

import clsx from "clsx";

import styles from "./link-button.module.css";

type Props = NavLinkProps;

export default function LinkButtonComponent({
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <NavLink
      className={clsx(styles["link-button"], className)}
      {...otherProps}
    />
  );
}
