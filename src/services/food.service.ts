import { CanvasService } from "@/services/canvas.service.ts";
import type { SnakeService } from "@/services/snake.service.ts";

import type { PointType } from "@/types/point.type.ts";

export class FoodService {
  public coords!: PointType;

  public constructor(private snake: SnakeService) {
    this.generateFood();
  }

  public generateFood(): void {
    while (true) {
      this.coords = {
        x: Math.floor(Math.random() * CanvasService.BOARD_WIDTH),
        y: Math.floor(Math.random() * CanvasService.BOARD_HEIGHT),
      };

      if (!this.snake.doesCollideWithPoint(this.coords)) {
        break;
      }
    }
  }
}
