import { type FormEvent, type ReactNode } from "react";

import { useQuery } from "@tanstack/react-query";

import clsx from "clsx";

import { getProfileApi } from "@/api/profile/get-profile.api.ts";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import PicturePickerComponent from "@/components/picture-picker/picture-picker.component.tsx";
import RadioComponent from "@/components/radio/radio.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";

import styles from "./edit-profile.module.css";

export default function EditProfilePage(): ReactNode {
  const {
    data: defaultData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileApi,
  });

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

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles["edit-profile"]}>
      <PaneComponent shade className={styles.pane} title="profile">
        <form onSubmit={formSubmitHandler}>
          <PicturePickerComponent
            className={styles["picture-picker"]}
            picture={defaultData.picture}
          />
          <div className={styles.fields}>
            <label>
              Username
              <TextInputComponent
                name="username"
                defaultValue={defaultData.username}
              />
            </label>
            <label>
              Password
              <TextInputComponent
                type="password"
                name="password"
                autoComplete="new-password"
                placeholder="********"
              />
            </label>
            <label>
              Email
              <TextInputComponent
                type="email"
                name="email"
                defaultValue={defaultData.email}
              />
            </label>
            <div className={clsx(styles.label, styles.gender)}>
              Gender
              <RadioComponent
                className={styles.male}
                label="Male"
                name="gender"
                value="male"
                defaultChecked={defaultData.gender === "male"}
              />
              <RadioComponent
                label="Female"
                name="gender"
                value="female"
                defaultChecked={defaultData.gender === "female"}
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
