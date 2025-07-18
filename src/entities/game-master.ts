import { Canvas } from "@/components/canvas.ts";

import { Controller } from "@/entities/controller.ts";
import { Food } from "@/entities/food.ts";
import { Snake } from "@/entities/snake.ts";

import { useGameStore } from "@/stores/game.store.ts";

export class GameMaster {
  public controller: Controller;
  public canvas: Canvas;
  public food: Food;
  public snake: Snake;

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
      if (useGameStore.getState().gameState === "over") {
        return;
      }

      const now = Date.now();

      if (useGameStore.getState().gameState === "running") {
        const deltaTime = now - lastTime;
        const distance = (deltaTime * Canvas.CELL_SIZE) / 1000;

        this.update(distance);
      }

      lastTime = now;
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
    if (
      this.snake.doesCollideWithWall() ||
      this.snake.doesCollideWithItself()
    ) {
      useGameStore.getState().gameOver();
    }
  }

  private checkForFood(): void {
    if (this.snake.doesCollideWithFood(this.food.coords)) {
      useGameStore.getState().incrementScore();
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
