import type { Direction } from "../types/direction.ts";

export const VALID_DIRECTIONS: Record<Direction, Direction[]> = {
  KeyW: ["KeyA", "KeyD"],
  KeyA: ["KeyW", "KeyS"],
  KeyS: ["KeyA", "KeyD"],
  KeyD: ["KeyW", "KeyS"],
};
