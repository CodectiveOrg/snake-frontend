import { type ReactNode, useEffect, useState } from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { editSettingsApi } from "@/api/settings/edit-settings.api";
import { getSettingsApi } from "@/api/settings/get-settings.api";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import SliderComponent from "@/components/slider/slider.component";

import styles from "./settings.content.module.css";

export default function SettingsContent(): ReactNode {
  const queryClient = useQueryClient();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettingsApi,
  });

  const editSettingsMutation = useMutation({
    mutationKey: ["settings"],
    mutationFn: editSettingsApi,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (result) => {
      await queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success(result.message);
    },
  });

  const [music, setMusic] = useState<number | null>(null);
  const [sfx, setSfx] = useState<number | null>(null);

  useEffect(() => {
    if (data) {
      setMusic(data.music);
      setSfx(data.sfx);
    }
  }, [data]);

  const handleConfirm = async (): Promise<void> => {
    if (music === null || sfx === null) return;

    await editSettingsMutation.mutateAsync({ music, sfx });
  };

  const renderPending = () => <p>Loading...</p>;

  const renderError = () => {
    const message = error instanceof Error ? error.message : "Unknown error";

    toast.error(message, {
      containerId: "modal",
      toastId: "settings",
    });

    return <p>Error: {message}</p>;
  };

  return (
    <div className={styles.settings}>
      {isPending ? (
        renderPending()
      ) : isError ? (
        renderError()
      ) : (
        <PaneComponent shade title="Settings" className={styles.pane}>
          <div className={styles.content}>
            <div className={styles.element}>
              <label>Music:</label>
              <SliderComponent
                value={music ?? 0}
                onChange={(val: number) => setMusic(val)}
              />
            </div>
            <div className={styles.element}>
              <label>Sfx:</label>
              <SliderComponent
                value={sfx ?? 0}
                onChange={(val: number) => setSfx(val)}
              />
            </div>

            <div className={styles.buttons}>
              <ButtonComponent asType="link" to="/game" color="secondary">
                Cancel
              </ButtonComponent>
              <ButtonComponent
                onClick={handleConfirm}
                disabled={editSettingsMutation.isPending}
              >
                {editSettingsMutation.isPending ? "Saving..." : "Confirm"}
              </ButtonComponent>
            </div>
          </div>
        </PaneComponent>
      )}
    </div>
  );
}
