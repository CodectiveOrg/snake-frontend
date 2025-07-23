import { type ComponentProps, type ReactNode, useState } from "react";

import LinkButtonComponent from "@/components/link-button/link-button.component";
import PaneComponent from "@/components/pane/pane.component.tsx";

import useVerifyQuery from "@/queries/use-verify.query.ts";

import styles from "./home.module.css";

export default function HomePage(): ReactNode {
  const { data } = useVerifyQuery();

  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null,
  );

  const exitButtonClickHandler = (): void => {
    console.log("Exit");
  };

  const items: ComponentProps<typeof LinkButtonComponent>[] = [
    { to: "/game", children: "Start" },
    { to: "/profile", children: "Profile" },
    { to: "/board", children: "Board" },
    { to: "/settings", children: "Settings" },
    { asType: "button", onClick: exitButtonClickHandler, children: "Exit" },
  ];

  return (
    <div className={styles.home}>
      <PaneComponent title="Menu" className={styles.pane}>
        <div className={styles.username}>
          <span className={styles.prefix}>Hello, </span>
          {data?.username}!
        </div>
        <div
          className={styles.menu}
          onMouseLeave={() => setActiveButtonIndex(null)}
        >
          {items.map((item, index) => (
            <LinkButtonComponent
              key={index}
              active={activeButtonIndex === null || index === activeButtonIndex}
              onMouseEnter={() => setActiveButtonIndex(index)}
              {...item}
            />
          ))}
        </div>
      </PaneComponent>
    </div>
  );
}
