import type { ReactNode } from "react";

import ModalComponent from "@/components/modal/modal.component.tsx";

import styles from "./playground.module.css";

export default function PlaygroundPage(): ReactNode {
  return (
    <div className={styles.playground}>
      <h1>Playground</h1>
      <main>
        <ModalComponent title="Pause Menu" className={styles.modal}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            exercitationem!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            adipisci amet distinctio ducimus error est impedit magnam molestiae
            rerum voluptates!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            exercitationem!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            adipisci amet distinctio ducimus error est impedit magnam molestiae
            rerum voluptates!
          </p>
          <br />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            exercitationem!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            adipisci amet distinctio ducimus error est impedit magnam molestiae
            rerum voluptates!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            exercitationem!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            adipisci amet distinctio ducimus error est impedit magnam molestiae
            rerum voluptates!
          </p>
        </ModalComponent>
      </main>
    </div>
  );
}
