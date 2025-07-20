import type { ReactNode, SVGProps } from "react";

import clsx from "clsx";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserver } from "@/hooks/use-resize-observer.ts";

import styles from "./xyz-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  titleWidth: number;
};

export default function XyzFrameComponent({
  titleWidth,
  className,
  ...otherProps
}: Props): ReactNode {
  const { ref, width, height } = useResizeObserver<SVGSVGElement>();

  const titleOffset = Size.MODAL_TITLE_OFFSET;
  const footerOffset = Size.MODAL_FOOTER_OFFSET;
  const footerWidth = Size.MODAL_FOOTER_WIDTH;
  const cornerOffset = Size.MODAL_CORNER_OFFSET;
  const strokeWidth = Size.MODAL_CORNER_WIDTH;
  const titlePadding = Size.MODAL_TITLE_PADDING;

  titleWidth = Math.max(Size.MODAL_MIN_TITLE_WIDTH, titleWidth);
  const remainWidth = (width - titleWidth) / 2 - titlePadding;

  const footerRemainWidth = (width - footerWidth) / 2;

  return (
    <svg
      ref={ref}
      className={clsx(styles["xyz-frame"], className)}
      viewBox={`${-strokeWidth / 2} ${-strokeWidth / 2} ${width + strokeWidth} ${height + strokeWidth}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        className={styles.perimeter}
        d={`M${cornerOffset} 0L0 ${cornerOffset}V${height - cornerOffset}L${cornerOffset} ${height}H${footerRemainWidth}L${footerRemainWidth + cornerOffset} ${height - footerOffset}H${width - footerRemainWidth - cornerOffset}L${width - footerRemainWidth} ${height}H${width - cornerOffset}L${width} ${height - cornerOffset}V${cornerOffset}L${width - cornerOffset} 0H${width - remainWidth}L${width - remainWidth - cornerOffset} ${titleOffset}H${remainWidth + cornerOffset}L${remainWidth} 0H${cornerOffset}Z`}
      />
      <path
        className={styles.corner}
        d={`M${2 * cornerOffset} 0H${cornerOffset}L0 ${cornerOffset}V${2 * cornerOffset}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M0 ${height - 2 * cornerOffset}V${height - cornerOffset}L${cornerOffset} ${height}H${2 * cornerOffset}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M${width - 2 * cornerOffset} ${height}H${width - cornerOffset}L${width} ${height - cornerOffset}V${height - 2 * cornerOffset}`}
        strokeWidth={strokeWidth}
      />
      <path
        className={styles.corner}
        d={`M${width} ${2 * cornerOffset}V${cornerOffset}L${width - cornerOffset} 0H${width - 2 * cornerOffset}`}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
