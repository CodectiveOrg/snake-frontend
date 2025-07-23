import { type ReactNode, useEffect, useRef } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { editSettingsApi } from "@/api/auth/edit-settings.api";
import { getSettingsApi } from "@/api/auth/get-settings.api";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import SliderComponent from "@/components/slider/slider.component";

import type { ResponseDto } from "@/dto/response/response.dto";

import styles from "./settings.module.css";

export default function SettingsContent({
  onCancel,
  onConfirm,
}: { onCancel?: () => void; onConfirm?: () => void } = {}): ReactNode {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettingsApi,
  });

  const musicRef = useRef<number>(5);
  const sfxRef = useRef<number>(5);

  useEffect(() => {
    if (data) {
      musicRef.current = data.music;
      sfxRef.current = data.sfx;
    }
  }, [data]);

  const mutation = useMutation<
    ResponseDto,
    Error,
    { music: number; sfx: number }
  >({
    mutationFn: editSettingsApi,
    onSuccess: () => {
      toast.success("Settings updated successfully");
    },
    onError: (error: unknown) => {
      const message =
        error instanceof Error ? error.message : "Failed to update settings";
      toast.error(message);
    },
  });

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (musicRef.current == null || sfxRef.current == null) return;

    mutation.mutate({ music: musicRef.current, sfx: sfxRef.current });
    if (onConfirm) onConfirm();
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
          <form
            className={styles.content}
            onSubmit={(e) => formSubmitHandler(e)}
          >
            <div className={styles.element}>
              <label>Music</label>
              <SliderComponent
                value={data?.music}
                onChange={(val: number) => {
                  musicRef.current = val;
                }}
              />
            </div>

            <div className={styles.element}>
              <label>Sfx</label>
              <SliderComponent
                value={data?.sfx}
                onChange={(val: number) => {
                  sfxRef.current = val;
                }}
              />
            </div>

            <div className={styles.buttons}>
              {onCancel ? (
                <ButtonComponent
                  type="button"
                  color="secondary"
                  onClick={onCancel}
                >
                  Cancel
                </ButtonComponent>
              ) : (
                <ButtonComponent asType="link" to="/game" color="secondary">
                  Cancel
                </ButtonComponent>
              )}
              <ButtonComponent type="submit">Confirm</ButtonComponent>
            </div>
          </form>
        </PaneComponent>
      )}
    </div>
  );
}
