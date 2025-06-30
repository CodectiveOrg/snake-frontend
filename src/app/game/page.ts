import { DOM } from "../../utils/dom.utils.ts";
import { generateBoard } from "../generate-board.ts";
import { generateCanvas } from "../generate-canvas.ts";
import { generateSnake, generateSnakeLines } from "../generate-snake.ts";
import { generateFood } from "../generate-food.ts";
import { runGame } from "../run-game.ts";

export function initGamePage(username: string): void {
  DOM.nameSpan.textContent = username;

  DOM.main.removeChild(DOM.introForm);

  generateBoard();
  generateCanvas(480, 320);

  generateSnake();
  generateSnakeLines();

  generateFood();
  runGame();
}
