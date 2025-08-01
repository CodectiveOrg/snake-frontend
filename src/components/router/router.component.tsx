import type { ReactNode } from "react";

import { BrowserRouter, Route, Routes } from "react-router";

import GuestOnlyGuard from "@/guards/guest-only.guard.tsx";
import LoggedInOnlyGuard from "@/guards/logged-in-only.guard.tsx";

import EditProfilePage from "@/pages/edit-profile/edit-profile.page.tsx";
import GamePage from "@/pages/game/game.page.tsx";
import GuidePage from "@/pages/guide/guide.page.tsx";
import HomePage from "@/pages/home/home.page.tsx";
import LeaderboardPage from "@/pages/leaderboard/leaderboard.page";
import ModalPage from "@/pages/modal/modal.page.tsx";
import PlaygroundPage from "@/pages/playground/playground.page.tsx";
import SettingsPage from "@/pages/settings/settings.page";
import SignInPage from "@/pages/sign-in/sign-in.page.tsx";
import SignUpPage from "@/pages/sign-up/sign-up.page.tsx";
import UserPage from "@/pages/user/user.page";

export default function RouterComponent(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestOnlyGuard />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route element={<LoggedInOnlyGuard />}>
          <Route path="" element={<HomePage />} />
          <Route path="game" element={<GamePage />} />
          <Route path="profile" element={<EditProfilePage />} />
          <Route path="board" element={<LeaderboardPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="playground">
          <Route index element={<PlaygroundPage />} />
          <Route path="modal" element={<ModalPage />} />
        </Route>
        <Route path="guide" element={<GuidePage />} />
        <Route path="user/:username" element={<UserPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
