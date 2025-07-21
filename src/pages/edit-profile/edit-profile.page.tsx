import { type FormEvent, type ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import ProfilePickerComponent from "@/components/profile-picker/profile-picker.component.tsx";
import RadioComponent from "@/components/radio/radio.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";

import type { User } from "@/entities/user.ts";

import styles from "./edit-profile.module.css";

export default function EditProfilePage(): ReactNode {
  const [user, setUser] = useState<User>(generateUser);

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
          <ProfilePickerComponent />
          <div className={styles["user-data"]}>
            <div className={styles.username}>
              <label htmlFor="username">username</label>
              <TextInputComponent
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={(e): void =>
                  setUser((old): User => ({ ...old, username: e.target.value }))
                }
              />
            </div>

            <div className={styles.password}>
              <label htmlFor="password">password</label>
              <TextInputComponent
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={(e): void =>
                  setUser((old): User => ({ ...old, password: e.target.value }))
                }
              />
            </div>

            <div className={styles.email}>
              <label htmlFor="email">email</label>
              <TextInputComponent
                className={styles["email-input"]}
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={(e): void =>
                  setUser((old): User => ({ ...old, email: e.target.value }))
                }
              />
            </div>

            <div className={styles.gender}>
              <label>gender</label>
              <RadioComponent
                key="male"
                label="male"
                name="gender"
                defaultChecked={true}
                value="male"
                onChange={(e): void => {
                  const gender = e.target.value;

                  if (gender === "male" || gender === "female") {
                    setUser((old): User => ({ ...old, gender: gender }));
                  }
                }}
              />
              <RadioComponent
                key="female"
                label="female"
                name="gender"
                value="female"
                onChange={(e): void => {
                  const gender = e.target.value;

                  if (gender === "male" || gender === "female") {
                    setUser((old): User => ({ ...old, gender: gender }));
                  }
                }}
                checked={user.gender === "female"}
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
