import type { Point } from "../types/point.ts";

export class Snake {
  public static readonly SPEED = 16 / 1000;

  public body: Point[] = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
  ];
}
