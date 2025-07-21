import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import GamePage from "@/pages/game/game.page.tsx";
import HomePage from "@/pages/home/home.page";
import PlaygroundPage from "@/pages/playground/playground.page.tsx";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
