import type { ReactNode } from "react";

import { NavLink, type NavLinkProps } from "react-router";

import styles from "./link-button.module.css";

type Props = NavLinkProps;

export default function LinkButtonComponent(props: Props): ReactNode {
  return <NavLink className={styles["link-button"]} {...props}></NavLink>;
}
