import { type FormEvent, type ReactNode } from "react";

import clsx from "clsx";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import PicturePickerComponent from "@/components/picture-picker/picture-picker.component.tsx";
import RadioComponent from "@/components/radio/radio.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";

import type { User } from "@/entities/user.ts";

import styles from "./edit-profile.module.css";

const user = generateUser();

export default function EditProfilePage(): ReactNode {
  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUser = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      gender: formData.get("gender"),
      picture: formData.get("picture"),
    };

    console.log(newUser);
  };

  return (
    <div className={styles["edit-profile"]}>
      <PaneComponent shade className={styles.pane} title="profile">
        <form onSubmit={formSubmitHandler}>
          <PicturePickerComponent
            className={styles["picture-picker"]}
            picture={user.picture}
          />
          <div className={styles.fields}>
            <label>
              Username
              <TextInputComponent
                name="username"
                defaultValue={user.username}
              />
            </label>
            <label>
              Password
              <TextInputComponent
                type="password"
                name="password"
                defaultValue={user.password}
                autoComplete="new-password"
              />
            </label>
            <label>
              Email
              <TextInputComponent
                type="email"
                name="email"
                defaultValue={user.email}
              />
            </label>
            <div className={clsx(styles.label, styles.gender)}>
              Gender
              <RadioComponent
                className={styles.male}
                label="Male"
                name="gender"
                value="male"
                defaultChecked={user.gender === "male"}
              />
              <RadioComponent
                label="Female"
                name="gender"
                value="female"
                defaultChecked={user.gender === "female"}
              />
            </div>
            <div className={styles.actions}>
              <ButtonComponent color="secondary">Cancel</ButtonComponent>
              <ButtonComponent>Confirm</ButtonComponent>
            </div>
          </div>
        </form>
      </PaneComponent>
    </div>
  );
}

function generateUser(): User {
  const id = 12345;
  const username = "Alireza";
  const password = "12345";
  const email = "alireza@gmail.com";
  const gender = "male";
  const picture = null;

  return { id, username, password, email, gender, picture };
}
