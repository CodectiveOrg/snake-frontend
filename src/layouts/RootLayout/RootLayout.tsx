import type { ReactNode } from "react";

import { Outlet } from "react-router";

import styles from "./RootLayout.module.css";

function RootLayout(): ReactNode {
  return (
    <div className={styles["root-layout"]}>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
