import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import GamePage from "@/pages/game/game.page.tsx";
import IntroPage from "@/pages/intro/intro.page.tsx";
import ModalPage from "@/pages/modal/modal.page.tsx";
import PlaygroundPage from "@/pages/playground/playground.page.tsx";
import QueryPage from "@/pages/query/query.page.tsx";

import ProtectedRouteComponent from "./protectedRoute.component";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouteComponent>
              <IntroPage />
            </ProtectedRouteComponent>
          }
        />
        <Route
          path="/game"
          element={
            <ProtectedRouteComponent>
              <GamePage />
            </ProtectedRouteComponent>
          }
        />
        <Route
          path="/query"
          element={
            <ProtectedRouteComponent>
              <QueryPage />
            </ProtectedRouteComponent>
          }
        />
        <Route
          path="/modal"
          element={
            <ProtectedRouteComponent>
              <ModalPage />
            </ProtectedRouteComponent>
          }
        />
        <Route
          path="/playground"
          element={
            <ProtectedRouteComponent>
              <PlaygroundPage />
            </ProtectedRouteComponent>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
