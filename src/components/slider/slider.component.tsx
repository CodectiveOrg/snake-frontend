import { type ReactNode, useState } from "react";

import clsx from "clsx";

import SliderFrameComponent from "@/components/slider/components/slider-frame/slider-frame.component.tsx";

import styles from "./slider.module.css";

type Props = {
  className?: string;
  value?: number;
  onChange?: (value: number) => void;
};

export default function SliderComponent({
  className,
  value: controlledValue,
  onChange,
}: Props): ReactNode {
  const [uncontrolledValue, setUncontrolledValue] = useState<number>(5);
  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const clickHandler = (index: number | null): void => {
    if (index !== null) {
      if (onChange) {
        onChange(index);
      } else {
        setUncontrolledValue(index);
      }
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
      <div className={styles.value}>
        <SliderFrameComponent className={styles.frame} />
        {value}
      </div>
    </div>
  );
}
