import { type ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component";
import CheckboxComponent from "@/components/checkbox/checkbox.component.tsx";
import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import styles from "./sign-in.module.css";

export default function SignInPage(): ReactNode {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles["sign-in"]}>
      <PaneComponent
        shade
        className={styles.pane}
        contentClassName={styles.container}
        title="Welcome"
      >
        <div className={styles.logo}>Game Name</div>
        <form>
          <div className={styles.fields}>
            <label>
              Your Name
              <TextInputComponent
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <TextInputComponent
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <CheckboxComponent
            className={styles.checkbox}
            label="Remember Me"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <LinkButtonComponent to="/signup">Sign Up</LinkButtonComponent>
          <ButtonComponent>Login</ButtonComponent>
        </form>
      </PaneComponent>
    </div>
  );
}
