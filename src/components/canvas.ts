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

    for (let i = 1; i < this.snake.body.length; i++) {
      const [point1, point2] = this.getSortedPoints(i - 1, i);

      const width = point2.x - point1.x + 1;
      const height = point2.y - point1.y + 1;

      this.ctx.fillRect(
        point1.x * this.SNAKE_SIZE,
        point1.y * this.SNAKE_SIZE,
        width * this.SNAKE_SIZE,
        height * this.SNAKE_SIZE,
      );
    }
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, DOM.canvas.width, DOM.canvas.height);
  }

  private getSortedPoints(i: number, j: number): [Point, Point] {
    const point1 = this.snake.body[i];
    const point2 = this.snake.body[j];

    return [
      { x: Math.min(point1.x, point2.x), y: Math.min(point1.y, point2.y) },
      { x: Math.max(point1.x, point2.x), y: Math.max(point1.y, point2.y) },
    ];
  }
}
