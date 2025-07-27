import { type ReactNode, useEffect, useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { editSettingsApi } from "@/api/settings/edit-settings.api";
import { getSettingsApi } from "@/api/settings/get-settings.api";

import ButtonComponent from "@/components/button/button.component.tsx";
import SliderComponent from "@/components/slider/slider.component";

import styles from "./settings-content.module.css";

type Props = {
  insideModal?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function SettingsContent({
  insideModal = false,
  onConfirm,
  onCancel,
}: Props): ReactNode {
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettingsApi,
  });

  const mutation = useMutation({
    mutationKey: ["settings"],
    mutationFn: editSettingsApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success(result.message, {
        containerId: insideModal ? "modal" : undefined,
      });
    },
  });

  const [music, setMusic] = useState<number>(0);
  const [sfx, setSfx] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setMusic(data.music);
      setSfx(data.sfx);
    }
  }, [data]);

  const confirmButtonClickHandler = async (): Promise<void> => {
    await mutation.mutateAsync({ music, sfx });
    onConfirm();
  };

  const cancelButtonClickHandler = (): void => {
    onCancel();
  };

  return (
    <div className={styles["settings-content"]}>
      {isPending ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <label>
            Music
            <SliderComponent value={music} onChange={setMusic} />
          </label>
          <label>
            SFX
            <SliderComponent value={sfx} onChange={setSfx} />
          </label>
          <div className={styles.actions}>
            <ButtonComponent
              color="secondary"
              onClick={cancelButtonClickHandler}
            >
              Cancel
            </ButtonComponent>
            <ButtonComponent onClick={confirmButtonClickHandler}>
              Confirm
            </ButtonComponent>
          </div>
        </>
      )}
    </div>
  );
}
