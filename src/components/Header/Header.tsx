import type { ReactNode } from "react";

import styles from "./Header.module.css";

function Header(): ReactNode {
  return <div className={styles.header}>This is the header</div>;
}

export default Header;
