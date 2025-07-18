import type { DirectionType } from "@/types/direction.type.ts";

export const VALID_DIRECTIONS: Record<DirectionType, DirectionType[]> = {
  KeyW: ["KeyA", "KeyD"],
  KeyA: ["KeyW", "KeyS"],
  KeyS: ["KeyA", "KeyD"],
  KeyD: ["KeyW", "KeyS"],
};
