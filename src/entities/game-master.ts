import { Canvas } from "@/components/canvas.ts";

import { Controller } from "@/entities/controller.ts";
import { Food } from "@/entities/food.ts";
import { Snake } from "@/entities/snake.ts";

export class GameMaster {
  public controller: Controller;
  public canvas: Canvas;
  public food: Food;
  public snake: Snake;

  public score: number = 0;
  private isGameOver: boolean = false;

  public constructor(canvas: HTMLCanvasElement) {
    this.controller = new Controller();
    this.snake = new Snake(this.controller);
    this.canvas = new Canvas(canvas, this.snake);
    this.food = new Food(this.snake);
  }

  public run(): void {
    this.initGameLoop();
  }

  private initGameLoop(): void {
    let lastTime = Date.now();

    const frameCallback = (): void => {
      if (this.isGameOver) {
        return;
      }

      const now = Date.now();

      const deltaTime = now - lastTime;
      lastTime = now;

      const distance = (deltaTime * Canvas.CELL_SIZE) / 1000;

      this.update(distance);

      requestAnimationFrame(frameCallback);
    };

    requestAnimationFrame(frameCallback);
  }

  private update(distance: number): void {
    this.snake.move(distance);
    this.checkForGameOver();
    this.checkForFood();
    this.draw();
  }

  private checkForGameOver(): void {
    this.isGameOver =
      this.snake.doesCollideWithWall() || this.snake.doesCollideWithItself();
  }

  private checkForFood(): void {
    if (this.snake.doesCollideWithFood(this.food.coords)) {
      this.score++;
      this.food.generateFood();
      this.snake.tailDebt++;
    }
  }

  private draw(): void {
    this.canvas.clear();
    this.canvas.drawFood(this.food.coords);
    this.canvas.drawSnake();
  }
}
