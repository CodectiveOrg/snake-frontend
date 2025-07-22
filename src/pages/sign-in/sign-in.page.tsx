import { type FormEvent, type ReactNode, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { signInApi } from "@/api/public/sign-in.api.ts";

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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: signInApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["verify"] });
      toast.success(result.message);
    },
  });

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    await mutation.mutateAsync({ username, password });
  };

  return (
    <div className={styles["sign-in"]}>
      <PaneComponent
        className={styles.pane}
        contentClassName={styles.container}
        title="Welcome"
      >
        <div className={styles.logo}>Game Name</div>
        <form onSubmit={formSubmitHandler}>
          <div className={styles.fields}>
            <label>
              Your Name
              <TextInputComponent
                className={styles.input}
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <TextInputComponent
                className={styles.input}
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
          <LinkButtonComponent to="/sign-up" color="light" size="small">
            Sign Up
          </LinkButtonComponent>
          <ButtonComponent>Login</ButtonComponent>
        </form>
      </PaneComponent>
    </div>
  );
}
