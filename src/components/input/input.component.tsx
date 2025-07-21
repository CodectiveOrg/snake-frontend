import type { ComponentPropsWithRef, ReactNode } from "react";

import RibbonComponent from "@/components/ribbon/ribbon.component.tsx";

import styles from "./input.module.css";

type Props = ComponentPropsWithRef<"input">;

export default function InputComponent({
  ref,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={styles.input}>
      <RibbonComponent>
        <input ref={ref} {...otherProps} />
      </RibbonComponent>
    </div>
  );
}
