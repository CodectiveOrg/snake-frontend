import type { ComponentPropsWithRef, ReactNode } from "react";

import clsx from "clsx";

import RibbonComponent from "@/components/ribbon/ribbon.component.tsx";

import styles from "./text-input.module.css";

type Props = ComponentPropsWithRef<"input">;

export default function TextInputComponent({
  ref,
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(styles.input, className)}>
      <RibbonComponent>
        <input ref={ref} {...otherProps} />
      </RibbonComponent>
    </div>
  );
}
