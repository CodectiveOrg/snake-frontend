import { cells } from "./generate-board.js";
import { generateRectangle, generateSquare } from "./generate-canvas.js";

export const snake = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
];

export const snakeNodes = [
  { x: 0, y: 0 },
  { x: 4, y: 0 },
];

export function generateSnake() {
  snake.forEach(({ x, y }) => {
    cells[y][x].classList.add("black");
  });
}

export function generateSnakeLines() {
  snakeNodes.forEach(({ x, y }, i) => {
    if (i !== 0) {
      generateRectangle(y, x, snakeNodes[i - 1].y, snakeNodes[i - 1].x);
    }
  });
}
