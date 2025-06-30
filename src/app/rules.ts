import type { Point } from "../types/point.ts";

export function didSnakeEatItself(head: Point): boolean {
  const snakeBody = this.master.snake.body;

  for (let i = 0; i < snakeBody.length - 1; i++) {
    if (snakeBody[i].x === head.x && snakeBody[i].y === head.y) {
      return true;
    }
  }

  return false;
}

export function didSnakeHitWall(head: Point): boolean {
  return head.x < 0 || head.y < 0 || head.x > 29 || head.y > 19;
}
