import { type ComponentProps, type ReactNode, useState } from "react";

import LinkButtonComponent from "@/components/link-button/link-button.component.tsx";

import styles from "./menu.module.css";

type Props = {
  items: ComponentProps<typeof LinkButtonComponent>[];
};

export default function MenuComponent({ items }: Props): ReactNode {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null,
  );

  return (
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
  );
}
