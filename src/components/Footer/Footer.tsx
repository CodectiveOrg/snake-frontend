import type { ReactNode } from "react";

import styles from "./Footer.module.css";

function Footer(): ReactNode {
  return <div className={styles.footer}>This is the footer</div>;
}

export default Footer;
