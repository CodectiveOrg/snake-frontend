import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import GuestOnlyGuard from "@/guards/guest-only.guard.tsx";
import LoggedInOnlyGuard from "@/guards/logged-in-only.guard.tsx";

import GamePage from "@/pages/game/game.page.tsx";

import HomePage from "@/pages/home/home.page";
import ModalPage from "@/pages/modal/modal.page.tsx";

import PlaygroundPage from "@/pages/playground/playground.page.tsx";
import QueryPage from "@/pages/query/query.page.tsx";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LoggedInOnlyGuard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Route>

        <Route path="/query" element={<QueryPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/playground" element={<PlaygroundPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
