import type { SnakeService } from "@/services/snake.service.ts";

import type { PointType } from "@/types/point.type.ts";

export class CanvasService {
  public static readonly BOARD_WIDTH = 30;
  public static readonly BOARD_HEIGHT = 20;
  public static readonly CELL_SIZE = 16;

  private readonly SNAKE_COLOR = "white";

  private readonly FOOD_COLOR = "red";

  private ctx: CanvasRenderingContext2D;

  public constructor(
    private canvas: HTMLCanvasElement,
    private snake: SnakeService,
  ) {
    this.init();
    this.ctx = this.canvas.getContext("2d")!;
  }

  private init(): void {
    this.canvas.width = CanvasService.BOARD_WIDTH * CanvasService.CELL_SIZE;
    this.canvas.height = CanvasService.BOARD_HEIGHT * CanvasService.CELL_SIZE;
  }

  public drawFood(point: PointType): void {
    this.ctx.fillStyle = this.FOOD_COLOR;

    this.ctx.fillRect(
      point.x * CanvasService.CELL_SIZE,
      point.y * CanvasService.CELL_SIZE,
      CanvasService.CELL_SIZE,
      CanvasService.CELL_SIZE,
    );
  }

  public drawSnake(): void {
    this.ctx.fillStyle = this.SNAKE_COLOR;

    for (let i = 1; i < this.snake.body.length; i++) {
      const [point1, point2] = this.getSortedPoints(i - 1, i);

      const width = point2.x - point1.x + 1;
      const height = point2.y - point1.y + 1;

      this.ctx.fillRect(
        point1.x * CanvasService.CELL_SIZE,
        point1.y * CanvasService.CELL_SIZE,
        width * CanvasService.CELL_SIZE,
        height * CanvasService.CELL_SIZE,
      );
    }
  }

  public clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private getSortedPoints(i: number, j: number): [PointType, PointType] {
    const point1 = this.snake.body[i];
    const point2 = this.snake.body[j];

    return [
      { x: Math.min(point1.x, point2.x), y: Math.min(point1.y, point2.y) },
      { x: Math.max(point1.x, point2.x), y: Math.max(point1.y, point2.y) },
    ];
  }
}
