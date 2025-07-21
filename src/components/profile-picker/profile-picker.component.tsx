import { type ReactNode } from "react";

import MingcuteAddFill from "@/icons/MingcuteAddFill.tsx";

import styles from "./profile-picker.module.css";

export default function ProfilePickerComponent(): ReactNode {
  return (
    <div className={styles["profile-picture"]}>
      <label htmlFor="profile">
        <MingcuteAddFill />
      </label>
      <input type="file" id="profile" name="picture" />
      <img
        src="../../../public/images/profile.webp"
        alt="user profile picture"
      />
    </div>
  );
}
