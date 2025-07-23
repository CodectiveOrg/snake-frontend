import { type ReactNode } from "react";

import clsx from "clsx";

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
    <div className={clsx(styles["picture-picker"], className)}>
      <img
        src={picture ?? "/images/user-picture-placeholder.webp"}
        alt="User's Profile Picture"
      />
      <label>
        <span className={styles.icon}>+</span>
        <input type="file" name="picture" accept="image/jpg , image/png" />
      </label>
    </div>
  );
}
