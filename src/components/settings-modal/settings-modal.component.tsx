import { type ReactNode, useRef } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";
import SettingsContent from "@/components/settings-content/settings-content.component.tsx";

export default function SettingsModalComponent(): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalComponent ref={modalRef} className="settings-modal" title="Settings">
      <SettingsContent />
    </ModalComponent>
  );
}
