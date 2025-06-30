import { initIntroPage } from "../app/intro/page.ts";
import { initGamePage } from "../app/game/page.ts";

import { DOM } from "./dom.utils.ts";

type Page = "intro" | "game";

type InitFunction = {
  intro: typeof initIntroPage;
  game: typeof initGamePage;
};

export function navigate<TPage extends Page>(
  page: TPage,
  props: Parameters<InitFunction[TPage]>,
): void {
  switch (page) {
    case "intro":
      DOM.introSection.style.display = "";
      DOM.gameSection.style.display = "none";

      initIntroPage();

      break;
    case "game":
      DOM.introSection.style.display = "none";
      DOM.gameSection.style.display = "";

      initGamePage(props[0] as any);

      break;
  }
}
