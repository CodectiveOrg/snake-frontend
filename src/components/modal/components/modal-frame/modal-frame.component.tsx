import type { ReactNode, SVGProps } from "react";

import styles from "./modal-frame.module.css";

type Props = SVGProps<SVGSVGElement> & {
  width: number;
  height: number;
  contentWidth: number;
};

export default function ModalFrameComponent({
  width,
  height,
  contentWidth,
  ...props
}: Props): ReactNode {
  const offset = 10;
  const remainWidth = (width - contentWidth) / 2;

  const strokeWidth = 2;

  return (
    <svg
      className={styles["modal-frame"]}
      width={width + 2 * strokeWidth}
      height={height + 2 * strokeWidth}
      viewBox={`${-strokeWidth} ${-strokeWidth} ${width + 2 * strokeWidth} ${height + 2 * strokeWidth}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d={`M${offset} 0L0 ${offset}V${height - offset}L${offset} ${height}H${remainWidth}L${remainWidth + offset} ${height - offset}H${width - remainWidth - offset}L${width - remainWidth} ${height}H${width - offset}L${width} ${height - offset}V${offset}L${width - offset} 0H${width - remainWidth}L${width - remainWidth - offset} ${offset}H${remainWidth + offset}L${remainWidth} 0H${offset}Z`}
        fill="#00FF00"
      />
      <path
        d={`M${2 * offset} 0H${offset}L0 ${offset}V${2 * offset}`}
        stroke="#FFF"
        strokeWidth={strokeWidth}
      />
      <path
        d={`M0 ${height - 2 * offset}V${height - offset}L${offset} ${height}H${2 * offset}`}
        stroke="#FFF"
        strokeWidth={strokeWidth}
      />
      <path
        d={`M${width - 2 * offset} ${height}H${width - offset}L${width} ${height - offset}V${height - 2 * offset}`}
        stroke="#FFF"
        strokeWidth={strokeWidth}
      />
      <path
        d={`M${width} ${2 * offset}V${offset}L${width - offset} 0H${width - 2 * offset}`}
        stroke="#FFF"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
