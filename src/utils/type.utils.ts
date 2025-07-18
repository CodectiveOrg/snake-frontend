import { DIRECTIONS, type Direction } from "@/types/direction.ts";

export function isDirection(value: string): value is Direction {
  return DIRECTIONS.includes(value as Direction);
}
