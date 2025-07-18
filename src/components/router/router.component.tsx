import type { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import IntroPage from "../../pages/intro/intro.page.tsx";
import GamePage from "../../pages/game/game.page.tsx";

export default function RouterComponent(): ReactNode {
  const username = localStorage.getItem("username");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={username ? <IntroPage /> : <GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}
