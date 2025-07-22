import { type ReactNode, useState } from "react";

import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component.tsx";

import styles from "./home.module.css";

const user = "DEAR USER";

type Item = {
  to: string;
  title: string;
};

const items: Item[] = [
  { to: "/game", title: "Start" },
  { to: "/profile", title: "Profile" },
  { to: "/board", title: "Board" },
  { to: "/settings", title: "Settings" },
  { to: "/exit", title: "Exit" },
];

export default function HomePage(): ReactNode {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null,
  );

  return (
    <div className={styles.home}>
      <PaneComponent title="Menu" className={styles.pane}>
        <div className={styles.username}>
          <span className={styles.prefix}>Hello, </span>
          {user}!
        </div>
        <div
          className={styles.menu}
          onMouseLeave={() => setActiveButtonIndex(null)}
        >
          {items.map((item, index) => (
            <LinkButtonComponent
              key={item.title}
              to={item.to}
              active={activeButtonIndex === null || index === activeButtonIndex}
              onMouseEnter={() => setActiveButtonIndex(index)}
            >
              {item.title}
            </LinkButtonComponent>
          ))}
        </div>
      </PaneComponent>
    </div>
  );
}
