import { type Dispatch, type ReactNode, type SetStateAction } from "react";

import clsx from "clsx";

import MingcuteAddFill from "@/icons/MingcuteAddFill.tsx";

import type { User } from "@/entities/user.ts";

import styles from "./profile-picker.module.css";

type Props = {
  user: User;
  setUser?: Dispatch<SetStateAction<User>>;
};

export default function ProfilePickerComponent({ user }: Props): ReactNode {
  return (
    <div
      className={clsx(
        styles["profile-picture"],
        !user.picture && styles.active,
      )}
    >
      <label htmlFor="profile">
        <MingcuteAddFill />
      </label>
      <input
        type="file"
        id="profile"
        name="picture"
        accept="image/jpg , image/png"
      />
      <img
        src="../../../public/images/profile.webp"
        alt="user profile picture"
      />
    </div>
  );
}
