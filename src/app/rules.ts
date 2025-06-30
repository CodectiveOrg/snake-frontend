import { snake } from "../Entities/snake.ts";

export function isSnakeEatItself(headX, headY) {
  for (let i = 0; i < snake.length - 1; i++) {
    const x = snake[i].x,
      y = snake[i].y;

    if (headX === x && headY === y) {
      return true;
    }
  }

  return false;
}

export function isSnakeHitWall(headX, headY) {
  if (headX < 0 || headY < 0 || headX > 29 || headY > 19) {
    return true;
  }
}
