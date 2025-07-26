import { create } from "zustand/react";

import type { GameStateType } from "@/types/game-state.type.ts";

type GameStore = {
  score: number;
  gameState: GameStateType;
  incrementScore: () => void;
  reset: () => void;
  run: () => void;
  pause: () => void;
  gameOver: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  gameState: "running",
  incrementScore: () => {
    set((state) => ({ score: state.score + 1 }));
  },
  reset: () => {
    set(() => ({ score: 0 }));
  },
  run: () => {
    set(() => ({ gameState: "running" }));
  },
  pause: () => {
    set(() => ({ gameState: "paused" }));
  },
  gameOver: () => {
    set(() => ({ gameState: "over" }));
  },
}));
