import { type ReactNode, useState } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import InputComponent from "@/components/input/input.component.tsx";
import ModalComponent from "@/components/modal/modal.component.tsx";
import ProfilePickerComponent from "@/components/profile-picker/profile-picker.component.tsx";
import RadioComponent from "@/components/radio/radio.component.tsx";

import type { UserType } from "@/types/user.type.ts";

import styles from "./edit-profile.module.css";

export default function EditProfilePage(): ReactNode {
  const [user, setUser] = useState<UserType>(() => generateUser());

  console.log(user);

  return (
    <div className={styles["edit-profile"]}>
      <ModalComponent title="profile">
        <form>
          <ProfilePickerComponent />
          <div className={styles["user-data"]}>
            <div className={styles.username}>
              <label htmlFor="username">username</label>
              <InputComponent
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={(e): void =>
                  setUser(
                    (old): UserType => ({ ...old, username: e.target.value }),
                  )
                }
              />
            </div>

            <div className={styles.password}>
              <label htmlFor="password">password</label>
              <InputComponent
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={(e): void =>
                  setUser(
                    (old): UserType => ({ ...old, password: e.target.value }),
                  )
                }
              />
            </div>

            <div className={styles.email}>
              <label htmlFor="email">email</label>
              <InputComponent
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={(e): void =>
                  setUser(
                    (old): UserType => ({ ...old, email: e.target.value }),
                  )
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
                  setUser(
                    (old): UserType => ({ ...old, gender: e.target.value }),
                  );
                }}
              />
              <RadioComponent
                key="female"
                label="female"
                name="gender"
                value="female"
                onChange={(e): void => {
                  setUser(
                    (old): UserType => ({ ...old, gender: e.target.value }),
                  );
                }}
                checked={user.gender === "female"}
              />
            </div>

            <div className={styles["action-buttons"]}>
              <ButtonComponent>CANCEL</ButtonComponent>
              <ButtonComponent>CONFIRM</ButtonComponent>
            </div>
          </div>
        </form>
      </ModalComponent>
    </div>
  );
}

function generateUser(): UserType {
  const username = "Alireza";
  const password = "12345";
  const email = "alireza@gmail.com";
  const gender = "male";
  const image = "";

  return {
    username,
    password,
    email,
    gender,
    image,
  };
}
