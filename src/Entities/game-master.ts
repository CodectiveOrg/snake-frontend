import { Snake } from "./snake.ts";
import { Food } from "./food.ts";
import { Canvas } from "../components/canvas.ts";
import { Controller } from "./controller.ts";
import { DOM } from "../utils/dom.utils.ts";

export class GameMaster {
  public controller: Controller;
  public canvas: Canvas;
  public food: Food;
  public snake: Snake;

  private score: number = 0;
  private isGameOver: boolean = false;

  public constructor() {
    this.controller = new Controller();
    this.snake = new Snake(this.controller);
    this.canvas = new Canvas(this.snake);
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

      const distance = deltaTime * Snake.SPEED;

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
      DOM.score.textContent = this.score.toString();

      this.food.generateFood();
    }
  }

  private draw(): void {
    this.canvas.clear();
    this.canvas.drawFood(this.food.coords);
    this.canvas.drawSnake();
  }
}
