import { type FormEvent, type ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import ProfilePickerComponent from "@/components/profile-picker/profile-picker.component.tsx";
import RadioComponent from "@/components/radio/radio.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";

import type { User } from "@/entities/user.ts";

import styles from "./edit-profile.module.css";

const user = generateUser();

export default function EditProfilePage(): ReactNode {
  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    return {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      gender: formData.get("gender"),
      picture: formData.get("picture"),
    };
  };

  return (
    <div className={styles["edit-profile"]}>
      <PaneComponent shade={true} title="profile">
        <form onSubmit={formSubmitHandler}>
          <ProfilePickerComponent user={user} />
          <div className={styles["user-data"]}>
            <div className={styles.username}>
              <label htmlFor="username">username</label>
              <TextInputComponent
                type="text"
                id="username"
                name="username"
                defaultValue={user.username}
              />
            </div>
            <div className={styles.password}>
              <label htmlFor="password">password</label>
              <TextInputComponent
                type="password"
                id="password"
                name="password"
                defaultValue={user.password}
                autoComplete="new-password"
              />
            </div>
            <div className={styles.email}>
              <label htmlFor="email">email</label>
              <TextInputComponent
                className={styles["email-input"]}
                type="email"
                id="email"
                name="email"
                defaultValue={user.email}
              />
            </div>
            <div className={styles.gender}>
              <label>gender</label>
              <RadioComponent
                key="male"
                label="male"
                name="gender"
                value="male"
                defaultChecked={user.gender === "male"}
              />
              <RadioComponent
                key="female"
                label="female"
                name="gender"
                value="female"
                defaultChecked={user.gender === "female"}
              />
            </div>
            <div className={styles["action-buttons"]}>
              <ButtonComponent color="secondary">CANCEL</ButtonComponent>
              <ButtonComponent>CONFIRM</ButtonComponent>
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
