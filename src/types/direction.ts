export const DIRECTIONS = ["KeyW", "KeyA", "KeyS", "KeyD"] as const;

export type Direction = (typeof DIRECTIONS)[number];
