import type { Point } from "../types/point.ts";
import type { Direction } from "../types/direction.ts";

export function movePoint(
  point: Point,
  direction: Direction,
  distance: number,
): Point {
  switch (direction) {
    case "KeyW":
      return { ...point, y: point.y - distance };
    case "KeyA":
      return { ...point, x: point.x - distance };
    case "KeyS":
      return { ...point, y: point.y + distance };
    case "KeyD":
      return { ...point, x: point.x + distance };
  }
}

export function findDistanceToTurn(point: Point, direction: Direction): number {
  switch (direction) {
    case "KeyW":
      return point.y - Math.floor(point.y);
    case "KeyA":
      return point.x - Math.floor(point.x);
    case "KeyS":
      return Math.ceil(point.y) - point.y;
    case "KeyD":
      return Math.ceil(point.x) - point.x;
  }
}

export function calculateDistance(point1: Point, point2: Point): number {
  return Math.abs(point2.x - point1.x) + Math.abs(point2.y - point1.y);
}

export function calculateDirection(point1: Point, point2: Point): Direction {
  if (point2.y < point1.y) {
    return "KeyW";
  }

  if (point2.x < point1.x) {
    return "KeyA";
  }

  if (point1.y < point2.y) {
    return "KeyS";
  }

  return "KeyD";
}

export function doesPointCollideWithPoint(
  point1: Point,
  point2: Point,
): boolean {
  return calculateDistance(point1, point2) < 1;
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
