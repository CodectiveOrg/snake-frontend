import { type Direction, DIRECTIONS } from "../types/direction.ts";

export function isDirection(value: string): value is Direction {
  return DIRECTIONS.includes(value as Direction);
}
