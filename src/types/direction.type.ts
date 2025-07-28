export const DIRECTIONS = [
  "KeyW",
  "KeyA",
  "KeyS",
  "KeyD",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown",
  "ArrowLeft",
] as const;

export type DirectionType = (typeof DIRECTIONS)[number];
