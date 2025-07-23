import { type FormEvent, type ReactNode, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import clsx from "clsx";

import { toast } from "sonner";

import { signInApi } from "@/api/auth/sign-in.api.ts";

import ButtonComponent from "@/components/button/button.component";
import CheckboxComponent from "@/components/checkbox/checkbox.component";
import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import authStyles from "@/styles/auth.module.css";

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
    <div className={clsx(styles["sign-in"], authStyles.auth)}>
      <PaneComponent
        className={authStyles.pane}
        contentClassName={authStyles.container}
        title="Welcome"
      >
        <div className={authStyles.logo}>Game Name</div>
        <form onSubmit={formSubmitHandler}>
          <div className={authStyles.fields}>
            <label>
              Your Name
              <TextInputComponent
                className={authStyles.input}
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <TextInputComponent
                className={authStyles.input}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <CheckboxComponent
            className={authStyles.checkbox}
            label="Remember Me"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <LinkButtonComponent to="/sign-up" color="light" size="small">
            Sign Up
          </LinkButtonComponent>
          <ButtonComponent>Sign In</ButtonComponent>
        </form>
      </PaneComponent>
    </div>
  );
}
