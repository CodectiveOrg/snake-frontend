import { CanvasService } from "@/services/canvas.service.ts";
import { ControllerService } from "@/services/controller.service.ts";
import { FoodService } from "@/services/food.service.ts";
import { SnakeService } from "@/services/snake.service.ts";

import { useGameStore } from "@/stores/game.store.ts";

export class GameMasterService {
  public controller: ControllerService;
  public canvas: CanvasService;
  public food: FoodService;
  public snake: SnakeService;

  public constructor(canvas: HTMLCanvasElement) {
    this.controller = new ControllerService();
    this.snake = new SnakeService(this.controller);
    this.canvas = new CanvasService(canvas, this.controller, this.snake);
    this.food = new FoodService(this.snake);
  }

  public run(): void {
    this.initGameLoop();
  }

  private initGameLoop(): void {
    let lastTime = Date.now();

    const frameCallback = (): void => {
      const gameState = useGameStore.getState().gameState;

      if (gameState === "over" || gameState === "end") {
        return;
      }

      const now = Date.now();

      if (gameState === "playing") {
        const deltaTime = now - lastTime;
        const distance = (deltaTime * CanvasService.CELL_SIZE) / 1000 / 10;

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
