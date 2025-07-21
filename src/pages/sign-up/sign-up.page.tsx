import { type FormEvent, type ReactNode, useState } from "react";

import { useNavigate } from "react-router";

import { useMutation } from "@tanstack/react-query";

import { toast } from "sonner";

import ButtonComponent from "@/components/button/button.component";
import CheckboxComponent from "@/components/checkbox/checkbox.component";
import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component";
import TextInputComponent from "@/components/text-input/text-input.component";

import type { SignupDto } from "@/dto/sign-up.dto";

import { richFetch } from "@/utils/fetch.utils";

import styles from "./sign-up.module.css";

type SignupType = {
  username: string;
  email: string;
  password: string;
};

async function postSignupApi(signupData: SignupType): Promise<SignupDto> {
  const data = await richFetch<SignupDto>("/auth/sign-up", {
    method: "POST",
    body: JSON.stringify(signupData),
  });

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
export default function SignUpPage(): ReactNode {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const mutation = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: postSignupApi,
  });

  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await mutation.mutateAsync({ username, email, password });
      navigate("/sign-in");
      toast("You created account successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className={styles["sign-up"]}>
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
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label>
              Email
              <TextInputComponent
                className={styles.input}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <CheckboxComponent
            className={styles.checkbox}
            label="Remember Me"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <LinkButtonComponent to={"/sign-in"} color="light" size="small">
            login
          </LinkButtonComponent>
          <ButtonComponent>Sign Up</ButtonComponent>
        </form>
      </PaneComponent>
    </div>
  );
}
