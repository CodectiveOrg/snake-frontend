import { Canvas } from "../components/canvas.ts";
import type { Point } from "../types/point.ts";
import { GameMaster } from "./game-master.ts";

export class Food {
  public coords!: Point;

  public constructor(private master: GameMaster) {
    this.generateFood();
  }

  public generateFood(): void {
    const totalCellsCount = Canvas.BOARD_WIDTH * Canvas.BOARD_HEIGHT;

    const snakeLength = this.calculateSnakeLength();

    const index = Math.floor(Math.random() * (totalCellsCount - snakeLength));

    this.coords = this.calculateFoodCoords(index);
  }

  private calculateSnakeLength(): number {
    const snakeBody = this.master.snake.body;

    let length = 0;

    for (let i = 1; i < snakeBody.length; i++) {
      length += Math.abs(snakeBody[i].x - snakeBody[i - 1].x);
      length += Math.abs(snakeBody[i].y - snakeBody[i - 1].y);
    }

    return length + 1;
  }

  private calculateFoodCoords(index: number): Point {
    const board = this.generateBoard();

    let counter = 0;

    for (let x = 0; x < board.length; x++) {
      for (let y = 0; y < board[x].length; y++) {
        const isSnake = board[x][y].isSnake;
        if (isSnake) {
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

  private generateBoard(): { isSnake: boolean }[][] {
    const board: { isSnake: boolean }[][] = [];

    for (let x = 0; x < Canvas.BOARD_WIDTH; x++) {
      const column: { isSnake: boolean }[] = [];

      for (let y = 0; y < Canvas.BOARD_HEIGHT; y++) {
        column.push({ isSnake: false });
      }

      board.push(column);
    }

    return board;
  }
}
