import { type FormEvent, type ReactNode, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import clsx from "clsx";

import { signUpApi } from "@/api/auth/sign-up.api.ts";

import ButtonComponent from "@/components/button/button.component";
import CheckboxComponent from "@/components/checkbox/checkbox.component";
import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import authStyles from "@/styles/auth.module.css";

import styles from "./sign-up.module.css";

export default function SignUpPage(): ReactNode {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signUpApi,
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
    await mutation.mutateAsync({ username, email, password });
  };

  return (
    <div className={clsx(styles["sign-up"], authStyles.auth)}>
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
            <label>
              Email
              <TextInputComponent
                className={authStyles.input}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <CheckboxComponent
            className={authStyles.checkbox}
            label="Remember Me"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <LinkButtonComponent to="/sign-in" color="light" size="small">
            Sign In
          </LinkButtonComponent>
          <ButtonComponent>Sign Up</ButtonComponent>
        </form>
      </PaneComponent>
    </div>
  );
}
