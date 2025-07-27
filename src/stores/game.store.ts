import { create } from "zustand/react";

import type { GameStateType } from "@/types/game-state.type.ts";

type GameStore = {
  score: number;
  gameState: GameStateType;
  incrementScore: () => void;
  reset: () => void;
  play: () => void;
  pause: () => void;
  gameOver: () => void;
  end: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  gameState: "playing",
  incrementScore: () => {
    set((state) => ({ score: state.score + 1 }));
  },
  reset: () => {
    set(() => ({ score: 0 }));
  },
  play: () => {
    set(() => ({ gameState: "playing" }));
  },
  pause: () => {
    set(() => ({ gameState: "paused" }));
  },
  gameOver: () => {
    set(() => ({ gameState: "over" }));
  },
  end: () => {
    set(() => ({ gameState: "end" }));
  },
}));
