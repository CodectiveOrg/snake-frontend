import { ControllerService } from "@/services/controller.service.ts";
import type { SnakeService } from "@/services/snake.service.ts";

import type { PointType } from "@/types/point.type.ts";

import { calculateRotationByDirection } from "@/utils/geometry.utils.ts";

export class CanvasService {
  public static readonly BOARD_WIDTH = 30;
  public static readonly BOARD_HEIGHT = 20;
  public static readonly CELL_SIZE = 16;

  private readonly SNAKE_COLOR = "white";
  private readonly FOOD_COLOR = "red";

  private ctx: CanvasRenderingContext2D;
  private readonly snakeHead: HTMLImageElement;

  public constructor(
    private canvas: HTMLCanvasElement,
    private controller: ControllerService,
    private snake: SnakeService,
  ) {
    this.init();
    this.ctx = this.canvas.getContext("2d")!;

    this.snakeHead = new Image();
    this.snakeHead.src = "/vite.svg";
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

    this.drawSnakeHead();
  }

  public drawSnakeHead(): void {
    const x =
      this.snake.head.x * CanvasService.CELL_SIZE + CanvasService.CELL_SIZE / 2;
    const y =
      this.snake.head.y * CanvasService.CELL_SIZE + CanvasService.CELL_SIZE / 2;

    const width = CanvasService.CELL_SIZE;
    const height = CanvasService.CELL_SIZE;

    const rotation = calculateRotationByDirection(this.controller.direction);

    this.ctx.clearRect(
      this.snake.head.x * CanvasService.CELL_SIZE,
      this.snake.head.y * CanvasService.CELL_SIZE,
      CanvasService.CELL_SIZE,
      CanvasService.CELL_SIZE,
    );

    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.drawImage(this.snakeHead, -width / 2, -height / 2, width, height);
    this.ctx.restore();
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
