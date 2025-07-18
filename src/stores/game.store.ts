import { create } from "zustand/react";

import type { GameStateType } from "@/types/game-state.type.ts";

type GameStore = {
  score: number;
  gameState: GameStateType;
  incrementScore: () => void;
  pause: () => void;
  gameOver: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  gameState: "running",
  incrementScore: () => {
    set((state) => ({ score: state.score + 1 }));
  },
  pause: () => {
    set(() => ({ gameState: "paused" }));
  },
  gameOver: () => {
    set(() => ({ gameState: "over" }));
  },
}));
