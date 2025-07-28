import type { DirectionType } from "@/types/direction.type.ts";

export const VALID_DIRECTIONS: Record<DirectionType, DirectionType[]> = {
  KeyW: ["KeyA", "KeyD", "ArrowRight", "ArrowLeft"],
  KeyA: ["KeyW", "KeyS", "ArrowUp", "ArrowDown"],
  KeyS: ["KeyA", "KeyD", "ArrowRight", "ArrowLeft"],
  KeyD: ["KeyW", "KeyS", "ArrowUp", "ArrowDown"],
  ArrowUp: ["KeyA", "KeyD", "ArrowRight", "ArrowLeft"],
  ArrowLeft: ["KeyW", "KeyS", "ArrowUp", "ArrowDown"],
  ArrowDown: ["KeyA", "KeyD", "ArrowRight", "ArrowLeft"],
  ArrowRight: ["KeyW", "KeyS", "ArrowUp", "ArrowDown"],
};
