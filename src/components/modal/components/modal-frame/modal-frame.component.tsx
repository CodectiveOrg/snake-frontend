import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserver } from "@/hooks/use-resize-observer.ts";

import styles from "./modal-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  titleWidth: number;
};

export default function ModalFrameComponent({
  titleWidth,
  className,
  ...props
}: Props): ReactNode {
  const { ref, width, height } = useResizeObserver<SVGSVGElement>();

  const offset = Size.MODAL_OFFSET;
  const strokeWidth = Size.MODAL_CORNER_WIDTH;
  const titlePadding = Size.MODAL_TITLE_PADDING;

  titleWidth = Math.max(Size.MODAL_MIN_CONTENT_WIDTH, titleWidth);
  const remainWidth = (width - titleWidth) / 2 - titlePadding;

  return (
    <svg
      ref={ref}
      className={clsx(styles["modal-frame"], className)}
      width={width + 2 * strokeWidth}
      height={height + 2 * strokeWidth}
      viewBox={`${-strokeWidth} ${-strokeWidth} ${width + 2 * strokeWidth} ${height + 2 * strokeWidth}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={styles.perimeter}
        d={`M${offset} 0L0 ${offset}V${height - offset}L${offset} ${height}H${remainWidth}L${remainWidth + offset} ${height - offset}H${width - remainWidth - offset}L${width - remainWidth} ${height}H${width - offset}L${width} ${height - offset}V${offset}L${width - offset} 0H${width - remainWidth}L${width - remainWidth - offset} ${offset}H${remainWidth + offset}L${remainWidth} 0H${offset}Z`}
      />
      <path
        className={styles.corner}
        d={`M${2 * offset} 0H${offset}L0 ${offset}V${2 * offset}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M0 ${height - 2 * offset}V${height - offset}L${offset} ${height}H${2 * offset}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M${width - 2 * offset} ${height}H${width - offset}L${width} ${height - offset}V${height - 2 * offset}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M${width} ${2 * offset}V${offset}L${width - offset} 0H${width - 2 * offset}`}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
