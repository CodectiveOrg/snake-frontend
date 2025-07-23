import { type ChangeEvent, type ReactNode, useRef } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import clsx from "clsx";

import { editPictureApi } from "@/api/profile/edit-picture.api.ts";

import styles from "./picture-picker.module.css";

type Props = {
  picture: string | null;
  className?: string;
};

export default function PicturePickerComponent({
  picture,
  className,
}: Props): ReactNode {
  const formRef = useRef<HTMLFormElement>(null);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["edit-picture"],
    mutationFn: editPictureApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["verify", "profile"] });
      toast.success(result.message);
    },
  });

  const inputChangeHandler = async (
    e: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    if (!formRef.current || !e.currentTarget.files) {
      return;
    }

    const formData = new FormData(formRef.current);
    await mutation.mutateAsync(formData);
  };

  return (
    <form ref={formRef} className={clsx(styles["picture-picker"], className)}>
      <img
        src={picture ?? "/images/user-picture-placeholder.webp"}
        alt="User's Profile Picture"
      />
      <label>
        <span className={styles.icon}>+</span>
        <input
          type="file"
          name="picture"
          accept="image/png, image/jpg"
          onChange={inputChangeHandler}
        />
      </label>
    </form>
  );
}
