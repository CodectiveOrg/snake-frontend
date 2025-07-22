import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

import styles from "./separator.module.css";

type Props = SVGProps<SVGSVGElement> & {
  dentWidth: number;
};

export default function SeparatorComponent({
  dentWidth,
  className,
  ...otherProps
}: Props): ReactNode {
  const { ref, width, height } = useResizeObserverHook<SVGSVGElement>();

  const offset = Size.SEPARATOR_OFFSET;

  dentWidth = Math.max(Size.SEPARATOR_MIN_DENT_WIDTH, dentWidth);
  const remainWidth = (width - dentWidth) / 2 - offset;

  return (
    <svg
      ref={ref}
      className={clsx(styles.separator, className)}
      height={offset}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.perimeter}
        d={`M0 0H${remainWidth}L${remainWidth + offset} ${offset}H${width - remainWidth - offset}L${width - remainWidth} 0H${width}`}
      />
    </svg>
  );
}
