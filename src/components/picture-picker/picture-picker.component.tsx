import { type ReactNode } from "react";

import clsx from "clsx";

import MingcuteAddFill from "@/icons/MingcuteAddFill.tsx";

import styles from "./picture-picker.module.css";

type Props = {
  picture: string | null;
  className?: string;
};

export default function PicturePickerComponent({
  picture,
  className,
}: Props): ReactNode {
  return (
    <div
      className={clsx(
        styles["profile-picture"],
        !picture && styles.active,
        className,
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
