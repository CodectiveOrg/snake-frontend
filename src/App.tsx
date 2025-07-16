import type { ReactNode } from "react";

import { Route, Routes } from "react-router";

import Intro from "./pages/Intro/Intro.tsx";
import Game from "./pages/Game/Game.tsx";

function App(): ReactNode {
  return (
    <Routes>
      <Route index element={<Intro />} />
      <Route path="game" element={<Game />} />
    </Routes>
  );
}

export default App;
