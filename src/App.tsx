import type { ReactNode } from "react";

import { Route, Routes } from "react-router";

import Intro from "./pages/Intro/Intro.tsx";
import Game from "./pages/Game/Game.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

function App(): ReactNode {
  return (
    <Routes>
      <Route index element={<Intro />} />
      <Route path="game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
