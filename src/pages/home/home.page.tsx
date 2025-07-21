import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import LinkButtonComponent from "@/components/link-button/link-button.component";
import ModalComponent from "@/components/modal/modal.component";

import styles from "./home.module.css";

const user = "DEAR USER";
export default function HomePage(): ReactNode {
  useNavigate();

  return (
    <div className={styles.home}>
      <ModalComponent title="MENU" className={styles.modalComponent}>
        <h3 className={styles.username}>HELLO {user}</h3>

        <div className={styles["button-container"]}>
          <LinkButtonComponent to="/game">START </LinkButtonComponent>
          <LinkButtonComponent to="/profile">PROFILE </LinkButtonComponent>
          <LinkButtonComponent to="/board">BOARD </LinkButtonComponent>
          <LinkButtonComponent to="/settings">SETTINGS </LinkButtonComponent>
          <LinkButtonComponent to="/exit">EXIT </LinkButtonComponent>
        </div>
      </ModalComponent>
    </div>
  );
}
