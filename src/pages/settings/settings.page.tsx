import type { ReactNode } from "react";

import { useNavigate } from "react-router";

import PaneComponent from "@/components/pane/pane.component.tsx";
import SettingsContent from "@/components/settings-content/settings-content.component.tsx";

import styles from "./settings.module.css";

export default function SettingsPage(): ReactNode {
  const navigate = useNavigate();

  const actionHandler = (): void => {
    navigate("/");
  };

  return (
    <div className={styles.settings}>
      <PaneComponent shade title="Settings" className={styles.pane}>
        <SettingsContent onConfirm={actionHandler} onCancel={actionHandler} />
      </PaneComponent>
    </div>
  );
}
