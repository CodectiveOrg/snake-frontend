import { DIRECTIONS, type DirectionType } from "@/types/direction.type.ts";

export function isDirection(value: string): value is DirectionType {
  return DIRECTIONS.includes(value as DirectionType);
}
