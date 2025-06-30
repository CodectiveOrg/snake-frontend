import { snake } from "./generate-snake.js";
import { cells } from "./generate-board.js";
import { generateSquare } from "./generate-canvas.js";

export let food;

export function generateFood() {
  const randomCell = Math.floor(Math.random() * (600 - snake.length));

  const { j: x, i: y } = findingFoodCell(randomCell);

  cells[y][x].classList.add("food");

  generateSquare(y, x, "red");

  food = { x, y };
}

function findingFoodCell(randomCell) {
  let counter = 0;

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 30; j++) {
      let isItOnSnake = false;

      snake.forEach(({ x, y }) => {
        if (i === y && j === x) {
          isItOnSnake = true;
        }
      });

      if (!isItOnSnake) {
        counter++;
      }

      if (counter === randomCell) {
        return { i, j };
      }
    }
  }
}
