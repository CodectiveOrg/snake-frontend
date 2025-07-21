import { type FormEvent, type ReactNode, useState } from "react";

import { useNavigate } from "react-router";

import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";

import ButtonComponent from "@/components/button/button.component";
import CheckboxComponent from "@/components/checkbox/checkbox.component.tsx";
import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import type { SigninDto } from "@/dto/sign-in.dto";

import { richFetch } from "@/utils/fetch.utils";

import styles from "./sign-in.module.css";

type SigninType = {
  username: string;
  password: string;
};

async function postSigninApi(signinData: SigninType): Promise<SigninDto> {
  const data = await richFetch<SigninDto>("/auth/sign-in", {
    method: "POST",
    body: JSON.stringify(signinData),
  });

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}

export default function SignInPage(): ReactNode {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const mutation = useMutation({
    mutationKey: ["sign-in"],
    mutationFn: postSigninApi,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await mutation.mutateAsync({ username, password });
      navigate("/");
      toast("You sign-in successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className={styles["sign-in"]}>
      <PaneComponent
        className={styles.pane}
        contentClassName={styles.container}
        title="Welcome"
      >
        <div className={styles.logo}>Game Name</div>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
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
