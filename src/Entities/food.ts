import { Canvas } from "../components/canvas.ts";
import type { Point } from "../types/point.ts";
import type { Snake } from "./snake.ts";
import { clamp } from "../utils/math.utils.ts";

export class Food {
  public coords!: Point;

  public constructor(private snake: Snake) {
    this.generateFood();
  }

  public generateFood(): void {
    const totalCellsCount = Canvas.BOARD_WIDTH * Canvas.BOARD_HEIGHT;

    const snakeLength = this.calculateSnakeLength();

    const index = Math.floor(Math.random() * (totalCellsCount - snakeLength));
    this.coords = this.calculateFoodCoords(index);
  }

  private calculateSnakeLength(): number {
    let length = 0;

    for (let i = 1; i < this.snake.body.length; i++) {
      length += Math.abs(this.snake.body[i].x - this.snake.body[i - 1].x);
      length += Math.abs(this.snake.body[i].y - this.snake.body[i - 1].y);
    }

    return length + 1;
  }

  private calculateFoodCoords(index: number): Point {
    const isSnake = this.generateIsSnakeBoard();

    let counter = 0;

    for (let x = 0; x < isSnake.length; x++) {
      for (let y = 0; y < isSnake[x].length; y++) {
        if (isSnake[x][y]) {
          continue;
        }

        if (counter === index) {
          return { x, y };
        }

        counter++;
      }
    }

    throw new Error("Welcome to the bot community :)");
  }

  private generateIsSnakeBoard(): boolean[][] {
    const isSnake: boolean[][] = [];

    for (let x = 0; x < Canvas.BOARD_WIDTH; x++) {
      const column: boolean[] = [];

      for (let y = 0; y < Canvas.BOARD_HEIGHT; y++) {
        column.push(false);
      }

      isSnake.push(column);
    }

    for (let i = 0; i < this.snake.body.length - 1; i++) {
      const x1 = Math.floor(this.snake.body[i].x);
      const y1 = Math.floor(this.snake.body[i].y);
      const x2 = Math.floor(this.snake.body[i + 1].x);
      const y2 = Math.floor(this.snake.body[i + 1].y);

      isSnake[x1][y1] = true;
      isSnake[x2][y2] = true;

      for (let x = x1; x !== x2; x += clamp(-1, x2 - x1, 1)) {
        isSnake[x][y1] = true;
      }

      for (let y = y1; y !== y2; y += clamp(-1, y2 - y1, 1)) {
        isSnake[x1][y] = true;
      }
    }

    return isSnake;
  }
}
