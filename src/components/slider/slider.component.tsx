import { type ReactNode, useState } from "react";

import clsx from "clsx";

import styles from "./slider.module.css";

type Props = {
  className?: string;
};

export default function SliderComponent({ className }: Props): ReactNode {
  const [value, setValue] = useState<number>(5);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clickHandler = (index: number | null): void => {
    if (index !== null) {
      setValue(index);
    }
  };

  const mouseEnterHandler = (index: number): void => {
    setHoveredIndex(index);
  };

  const mouseLeaveHandler = (): void => {
    setHoveredIndex(null);
  };

  return (
    <div className={clsx(styles.slider, className)}>
      <div
        className={styles.buttons}
        onMouseLeave={() => mouseLeaveHandler()}
        onClick={() => clickHandler(hoveredIndex)}
      >
        {Array(11)
          .fill(0)
          .map((_, index) => (
            <button
              key={index}
              className={clsx(
                styles.button,
                index <= value && styles.active,
                index === hoveredIndex && styles.hover,
              )}
              onClick={() => clickHandler(index)}
              onMouseEnter={() => mouseEnterHandler(index)}
            ></button>
          ))}
      </div>
    </div>
  );
}
