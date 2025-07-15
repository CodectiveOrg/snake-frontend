import { DOM } from "../../utils/dom.utils.ts";
import { GameMaster } from "../../xyz/game-master.ts";

export function initGamePage(username: string): void {
  DOM.nameSpan.textContent = username;

  const master = new GameMaster();
  master.run();
}
