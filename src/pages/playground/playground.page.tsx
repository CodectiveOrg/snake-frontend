import { type ReactNode } from "react";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";
import TextInputComponent from "@/components/text-input/text-input.component.tsx";
import UserBadgeComponent from "@/components/user-badge/user-badge.component.tsx";

import ScoreComponent from "@/pages/game/components/score/score.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <UserBadgeComponent
        username="BijanProgrammer"
        picture="/images/user-picture-placeholder.webp"
      />
      <ScoreComponent score={12} />
      <main
        style={{
          display: "grid",
          gap: "1rem",
          width: "50rem",
          height: "30rem",
        }}
      >
        <PaneComponent shade title="Settings">
          <TextInputComponent type="text" name="chiz" />
          <br />
          <ButtonComponent>Confirm</ButtonComponent>
          <ButtonComponent color="secondary">Cancel</ButtonComponent>
        </PaneComponent>
      </main>
    </div>
  );
}
