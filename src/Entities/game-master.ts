import { Snake } from "./snake.ts";
import { Food } from "./food.ts";
import { Canvas } from "../components/canvas.ts";
import { Controller } from "./controller.ts";

export class GameMaster {
  public controller: Controller;
  public canvas: Canvas;
  public food: Food;
  public snake: Snake;

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

    const update = (): void => {
      const now = Date.now();

      const deltaTime = now - lastTime;
      lastTime = now;

      const distance = deltaTime * Snake.SPEED;

      const result = this.draw(distance);
      if (!result) {
        return;
      }

      requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

  private draw(distance: number): boolean {
    this.canvas.clear();

    this.canvas.drawFood(this.food.coords);

    const result = this.snake.move(distance);
    this.canvas.drawSnake();

    return result;
  }
}
