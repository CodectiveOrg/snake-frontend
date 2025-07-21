import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import GuestOnlyGuard from "@/guards/guest-only.guard.tsx";
import LoggedInOnlyGuard from "@/guards/logged-in-only.guard.tsx";

import GamePage from "@/pages/game/game.page.tsx";
import IntroPage from "@/pages/intro/intro.page.tsx";
import ModalPage from "@/pages/modal/modal.page.tsx";
import PlaygroundPage from "@/pages/playground/playground.page.tsx";
import QueryPage from "@/pages/query/query.page.tsx";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestOnlyGuard />}>
          <Route path="/sign-in" element={<h1>Sign In</h1>} />
          <Route path="/sign-up" element={<h1>Sign Up</h1>} />
        </Route>
        <Route element={<LoggedInOnlyGuard />}>
          <Route path="/" element={<IntroPage />} />
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
