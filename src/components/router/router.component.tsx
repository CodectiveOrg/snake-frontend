import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import GamePage from "@/pages/game/game.page.tsx";
import IntroPage from "@/pages/intro/intro.page.tsx";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}
