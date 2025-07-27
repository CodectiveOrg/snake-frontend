import type { DirectionType } from "@/types/direction.type.ts";
import type { PointType } from "@/types/point.type.ts";

export function oppositeDirection(direction: DirectionType): DirectionType {
  switch (direction) {
    case "KeyW":
      return "KeyS";
    case "KeyA":
      return "KeyD";
    case "KeyS":
      return "KeyW";
    case "KeyD":
      return "KeyA";
  }
}

export function calculateRotationByDirection(direction: DirectionType): number {
  switch (direction) {
    case "KeyW":
      return -Math.PI / 2;
    case "KeyA":
      return -2 * Math.PI;
    case "KeyS":
      return Math.PI / 2;
    case "KeyD":
      return 0;
  }
}

export function movePoint(
  point: PointType,
  direction: DirectionType,
  distance: number,
): PointType {
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

export function findDistanceToTurn(
  point: PointType,
  direction: DirectionType,
): number {
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

export function calculateDistance(
  point1: PointType,
  point2: PointType,
): number {
  return Math.abs(point2.x - point1.x) + Math.abs(point2.y - point1.y);
}

export function calculateDirection(
  point1: PointType,
  point2: PointType,
): DirectionType {
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
  point1: PointType,
  point2: PointType,
): boolean {
  return calculateDistance(point1, point2) < 1;
}

export function doesPointCollideWithLine(
  point: PointType,
  linePoint1: PointType,
  linePoint2: PointType,
): boolean {
  const minX = Math.min(linePoint1.x, linePoint2.x);
  const maxX = Math.max(linePoint1.x, linePoint2.x);

  const minY = Math.min(linePoint1.y, linePoint2.y);
  const maxY = Math.max(linePoint1.y, linePoint2.y);

  const condition1 = minX <= point.x && point.x <= maxX;
  const condition2 = minY <= point.y && point.y <= maxY;

  return condition1 && condition2;
}
