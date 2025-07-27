import { type Ref } from "react";

import { Size } from "@/configs/size.config.ts";

import { useResizeObserverHook } from "@/hooks/use-resize-observer.hook.ts";

type Result = {
  ref: Ref<SVGSVGElement>;
  strokeWidth: number;
  viewBox: string;
  perimeterPath: string;
  topLeftCornerPath: string;
  bottomLeftCornerPath: string;
  bottomRightCornerPath: string;
  topRightCornerPath: string;
};

export function usePaneCalculationHook(
  titleWidth: number,
  hasDent: boolean,
  dentExtraWidth: number = 0,
): Result {
  const { ref, width, height } = useResizeObserverHook<SVGSVGElement>();

  const titleOffset = Size.PANE_TITLE_OFFSET;
  const footerOffset = Size.PANE_FOOTER_OFFSET;
  const footerWidth = Size.PANE_FOOTER_WIDTH;
  const cornerOffset = Size.PANE_CORNER_OFFSET;
  const strokeWidth = Size.PANE_CORNER_WIDTH;
  const titlePadding = Size.PANE_TITLE_PADDING;

  titleWidth = Math.max(Size.PANE_MIN_TITLE_WIDTH, titleWidth) + dentExtraWidth;
  const remainWidth = (width - titleWidth) / 2 - titlePadding;

  const footerRemainWidth = (width - footerWidth - dentExtraWidth) / 2;

  const viewBox = `${-strokeWidth / 2} ${-strokeWidth / 2} ${width + strokeWidth} ${height + strokeWidth}`;

  const titleDent = `H${width - remainWidth}L${width - remainWidth - cornerOffset} ${titleOffset}H${remainWidth + cornerOffset}L${remainWidth} 0`;
  const footerDent = `H${footerRemainWidth}L${footerRemainWidth + cornerOffset} ${height - footerOffset}H${width - footerRemainWidth - cornerOffset}L${width - footerRemainWidth} ${height}`;
  const perimeterPath = `M${cornerOffset} 0L0 ${cornerOffset}V${height - cornerOffset}L${cornerOffset} ${height}${hasDent ? footerDent : ""}H${width - cornerOffset}L${width} ${height - cornerOffset}V${cornerOffset}L${width - cornerOffset} 0${hasDent ? titleDent : ""}H${cornerOffset}Z`;

  const topLeftCornerPath = `M${2 * cornerOffset} 0H${cornerOffset}L0 ${cornerOffset}V${2 * cornerOffset}`;
  const bottomLeftCornerPath = `M0 ${height - 2 * cornerOffset}V${height - cornerOffset}L${cornerOffset} ${height}H${2 * cornerOffset}`;
  const bottomRightCornerPath = `M${width - 2 * cornerOffset} ${height}H${width - cornerOffset}L${width} ${height - cornerOffset}V${height - 2 * cornerOffset}`;
  const topRightCornerPath = `M${width} ${2 * cornerOffset}V${cornerOffset}L${width - cornerOffset} 0H${width - 2 * cornerOffset}`;

  return {
    ref,
    strokeWidth,
    viewBox,
    perimeterPath,
    topLeftCornerPath,
    bottomLeftCornerPath,
    bottomRightCornerPath,
    topRightCornerPath,
  };
}
