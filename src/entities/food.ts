import { Canvas } from "@/components/canvas.ts";

import type { Snake } from "@/entities/snake.ts";

import type { Point } from "@/types/point.ts";

export class Food {
  public coords!: Point;

  public constructor(private snake: Snake) {
    this.generateFood();
  }

  public generateFood(): void {
    while (true) {
      this.coords = {
        x: Math.floor(Math.random() * Canvas.BOARD_WIDTH),
        y: Math.floor(Math.random() * Canvas.BOARD_HEIGHT),
      };

      if (!this.snake.doesCollideWithPoint(this.coords)) {
        break;
      }
    }
  }
}
