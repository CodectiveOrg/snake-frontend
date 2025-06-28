import { cells } from "./generate-board.js";
import {generateSquare} from "./generate-canvas.js";

export const snake = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
];

export function generateSnake() {
  snake.forEach(({ x, y }) => {
    cells[y][x].classList.add("black");

    generateSquare(y, x);
  });
}
