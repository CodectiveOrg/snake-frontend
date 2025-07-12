import type { Point } from "../types/point.ts";

export function doesPointCollideWithPoint(
  point1: Point,
  point2: Point,
): boolean {
  return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y) < 1;
}

export function doesPointCollideWithLine(
  point: Point,
  linePoint1: Point,
  linePoint2: Point,
): boolean {
  return (
    Math.min(linePoint1.x, linePoint2.x) <= point.x &&
    point.x <= Math.max(linePoint1.x, linePoint2.x) &&
    Math.min(linePoint1.y, linePoint2.y) <= point.y &&
    point.y <= Math.max(linePoint1.y, linePoint2.y)
  );
}
