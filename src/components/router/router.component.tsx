import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import EditProfilePage from "@/pages/edit-profile/edit-profile.page.tsx";
import GamePage from "@/pages/game/game.page.tsx";
import IntroPage from "@/pages/intro/intro.page.tsx";
import ModalPage from "@/pages/modal/modal.page.tsx";
import PlaygroundPage from "@/pages/playground/playground.page.tsx";
import QueryPage from "@/pages/query/query.page.tsx";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/query" element={<QueryPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
