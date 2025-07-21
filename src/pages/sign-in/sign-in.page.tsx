import { type ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./sign-in.module.css";

export default function SignInPage(): ReactNode {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.parent}>
      <PaneComponent
        shade
        key={"signup"}
        title="welcome"
        className={styles["pane-signup-page"]}
      >
        <div className={styles.container}>
          <h2 className={styles["game-name"]}>G A M E &nbsp;N A M E</h2>
          <div className={styles["input-fields"]}>
            <div className={styles["input-box"]}>
              <label htmlFor="username">YOUR NAME</label>
              <TextInputComponent
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles["input-style"]}
              />
            </div>
            <div className={styles["input-box"]}>
              <label htmlFor="password">PASSWORD</label>
              <TextInputComponent
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={styles["input-style"]}
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles["checkbox-field"]}>
              <label className={styles["checkbox-label"]}>remember me</label>
              <input
                type="checkbox"
                checked={checked}
                className={styles["checkbox-input"]}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </div>

            <LinkButtonComponent
              to={"/signup"}
              className={styles["signup-link"]}
            >
              SIGN UP
            </LinkButtonComponent>
          </div>
          <div className={styles["signup-button-parent"]}>
            <ButtonComponent className={styles["signin-button"]}>
              LOGIN
            </ButtonComponent>
          </div>
        </div>
      </PaneComponent>
    </div>
  );
}
