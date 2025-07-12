import type { Point } from "../types/point.ts";
import { DOM } from "../utils/dom.utils.ts";
import type { Snake } from "../Entities/snake.ts";

export class Canvas {
  public static readonly BOARD_WIDTH = 30;
  public static readonly BOARD_HEIGHT = 20;

  private readonly SNAKE_COLOR = "black";
  private readonly SNAKE_SIZE = 16;

  private readonly FOOD_COLOR = "red";

  private ctx: CanvasRenderingContext2D;

  public constructor(private snake: Snake) {
    this.init();
    this.ctx = DOM.canvas.getContext("2d")!;
  }

  private init(): void {
    DOM.canvas.width = Canvas.BOARD_WIDTH * this.SNAKE_SIZE;
    DOM.canvas.height = Canvas.BOARD_HEIGHT * this.SNAKE_SIZE;
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
    this.ctx.fillStyle = this.SNAKE_COLOR;
    this.ctx.strokeStyle = this.SNAKE_COLOR;
    this.ctx.lineWidth = this.SNAKE_SIZE;

    this.ctx.beginPath();

    this.ctx.moveTo(this.snake.body[0].x * 16, this.snake.body[0].y * 16);
    for (let i = 1; i < this.snake.body.length; i++) {
      this.ctx.lineTo(this.snake.body[i].x * 16, this.snake.body[i].y * 16);
    }

    this.ctx.stroke();
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);
  }
}
