import type { ReactNode } from "react";

import clsx from "clsx";

import ButtonComponent from "@/components/button/button.component.tsx";
import PaneComponent from "@/components/pane/pane.component.tsx";

import styles from "./guide.module.css";

type Item = {
  image: string;
  title: string;
  orientation: "horizontal" | "vertical";
  alt: string;
};

const items: Item[] = [
  {
    image: "/illustrations/wasd.svg",
    title: "Navigation Keys",
    orientation: "vertical",
    alt: "W, A, S and D Buttons",
  },
  {
    image: "/illustrations/escape-button.svg",
    title: "Access Game Menu",
    orientation: "horizontal",
    alt: "Escape Button",
  },
  {
    image: "/illustrations/gesture.svg",
    title: "Move With Touch",
    orientation: "horizontal",
    alt: "Gesture",
  },
  {
    image: "/illustrations/pause-button.svg",
    title: "Pause the Game",
    orientation: "vertical",
    alt: "Space, Enter and P Buttons",
  },
];

export default function GuidePage(): ReactNode {
  return (
    <div className={styles.guide}>
      <PaneComponent
        shade
        title="guide"
        className={styles.pane}
        contentClassName={styles.content}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className={clsx(styles.group, styles[item.orientation])}
          >
            <img src={item.image} alt={item.alt} />
            <div className={styles.writings}>
              <div className={styles.title}>{item.title}</div>
            </div>
          </div>
        ))}
        <ButtonComponent>Confirm</ButtonComponent>
      </PaneComponent>
    </div>
  );
}
