import { type ReactNode, useRef } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";
import SettingsContent from "@/components/settings/settings.content.component";

type Props = {
  onExit: () => void;
};

export default function SettingsModalComponent({ onExit }: Props): ReactNode {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <ModalComponent ref={modalRef} className="settings-modal" title="Settings">
      <SettingsContent
        onCancel={() => {
          modalRef.current?.close();
          onExit();
        }}
      />
    </ModalComponent>
  );
}
