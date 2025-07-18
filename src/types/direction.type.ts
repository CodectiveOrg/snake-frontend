export const DIRECTIONS = ["KeyW", "KeyA", "KeyS", "KeyD"] as const;

export type DirectionType = (typeof DIRECTIONS)[number];
