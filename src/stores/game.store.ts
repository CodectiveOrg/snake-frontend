import { create } from "zustand/react";

import type { GameStateType } from "@/types/game-state.type.ts";

type GameStore = {
  score: number;
  gameState: GameStateType;
  music: number;
  sfx: number;
  incrementScore: () => void;
  reset: () => void;
  run: () => void;
  pause: () => void;
  gameOver: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  gameState: "running",
  music: 1,
  sfx: 1,
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
  incrementMusic: () => {
    set((state) => ({ music: state.music + 1 }));
  },
  decrementMusic: () => {
    set((state) => ({ music: state.music + 1 }));
  },
  incrementSfx: () => {
    set((state) => ({ sfx: state.sfx + 1 }));
  },
  decrementSfx: () => {
    set((state) => ({ sfx: state.sfx + 1 }));
  },
}));
