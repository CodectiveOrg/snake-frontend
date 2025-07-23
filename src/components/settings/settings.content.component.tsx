import { type ReactNode, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { changeSettingsApi } from "@/api/public/change-settings.api";
import { getuserSettingsApi } from "@/api/public/get-settings.api";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import SliderComponent from "@/components/slider/slider.component";

import styles from "./settings.module.css";
import "react-toastify/dist/ReactToastify.css";

export default function SettingsContent(): ReactNode {
  const {
    data: userSettingsData,
    isPending: userSettingsPending,
    isError: userSettingsError,
    error: userSettingsErrorMessage,
  } = useQuery({
    queryKey: ["user-settings"],
    queryFn: getuserSettingsApi,
  });

  const [music, setMusic] = useState<number | null>(null);
  const [sfx, setSfx] = useState<number | null>(null);

  useEffect(() => {
    if (userSettingsData) {
      setMusic(userSettingsData.music);
      setSfx(userSettingsData.sfx);
    }
  }, [userSettingsData]);

  const handleConfirm = async () => {
    if (music == null || sfx == null) return;

    try {
      await changeSettingsApi({ music, sfx });
      toast.success("Settings updated successfully");
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to update settings";
      toast.error(message);
    }
  };

  const renderPending = () => <p>Loading...</p>;

  const renderError = () => {
    const message =
      userSettingsErrorMessage instanceof Error
        ? userSettingsErrorMessage.message
        : "Unknown error";

    toast.error(message, {
      containerId: "modal",
      toastId: "user-settings",
    });

    return <p>Error: {message}</p>;
  };
  return (
    <div className={styles.settings}>
      {userSettingsPending ? (
        renderPending()
      ) : userSettingsError ? (
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
              <ButtonComponent onClick={handleConfirm}>Confirm</ButtonComponent>
            </div>
          </div>
        </PaneComponent>
      )}
    </div>
  );
}
