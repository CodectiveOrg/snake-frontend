import { type FormEvent, type ReactNode } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import clsx from "clsx";

import { editProfileApi } from "@/api/profile/edit-profile.api.ts";
import { getProfileApi } from "@/api/profile/get-profile.api.ts";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import PicturePickerComponent from "@/components/picture-picker/picture-picker.component.tsx";
import RadioComponent from "@/components/radio/radio.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";

import type { EditProfileRequestDto } from "@/dto/request/edit-profile.response.dto.ts";

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

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["edit-profile"],
    mutationFn: editProfileApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["verify", "profile"] });
      toast.success(result.message);
    },
  });

  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: EditProfileRequestDto = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      email: formData.get("email") as string,
      gender: formData.get("gender") as "male" | "female",
      picture: formData.get("picture") as string,
    };

    await mutation.mutateAsync(dto);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles["edit-profile"]}>
      <PaneComponent
        shade
        className={styles.pane}
        contentClassName={styles.content}
        title="profile"
      >
        <PicturePickerComponent
          className={styles["picture-picker"]}
          picture={defaultData.picture}
        />
        <form onSubmit={formSubmitHandler}>
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
