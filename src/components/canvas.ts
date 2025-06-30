import type { Point } from "../types/point.ts";
import { DOM } from "../utils/dom.utils.ts";
import type { GameMaster } from "../Entities/game-master.ts";

export class Canvas {
  public static readonly BOARD_WIDTH = 30;
  public static readonly BOARD_HEIGHT = 30;

  private readonly SNAKE_COLOR = "black";
  private readonly SNAKE_SIZE = 16;

  private readonly FOOD_COLOR = "red";

  private ctx: CanvasRenderingContext2D;

  public constructor(private master: GameMaster) {
    this.init();
    this.ctx = DOM.canvas.getContext("2d")!;
  }

  private init(): void {
    const { width, height } = DOM.canvas.getBoundingClientRect();

    DOM.canvas.width = width;
    DOM.canvas.height = height;
  }

  public drawFood(point: Point): void {
    this.ctx.fillStyle = this.FOOD_COLOR;

    this.ctx.fillRect(
      point.x * this.SNAKE_SIZE,
      point.y * this.SNAKE_SIZE,
      this.SNAKE_SIZE,
      this.SNAKE_SIZE,
    );
  }

  public drawSnake(): void {
    const snakeBody = this.master.snake.body;

    this.ctx.fillStyle = this.SNAKE_COLOR;
    this.ctx.strokeStyle = this.SNAKE_COLOR;
    this.ctx.lineWidth = this.SNAKE_SIZE;

    this.ctx.moveTo(snakeBody[0].x, snakeBody[0].y);
    for (let i = 1; i < snakeBody.length; i++) {
      this.ctx.lineTo(snakeBody[i].x, snakeBody[i].y);
    }
  }

  public clearCanvas(): void {
    this.ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);
  }
}
