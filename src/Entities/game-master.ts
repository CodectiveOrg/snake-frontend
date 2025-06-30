import { Snake } from "./snake.ts";
import { Food } from "./food.ts";
import { Canvas } from "../components/canvas.ts";
import { runSnake } from "../app/run-game.ts";

export class GameMaster {
  public canvas: Canvas;
  public snake: Snake;
  public food: Food;

  public constructor() {
    this.canvas = new Canvas(this);
    this.snake = new Snake();
    this.food = new Food(this);
  }

  public run(): void {
    this.initGameLoop();
  }

  private initGameLoop(): void {
    let lastTime = Date.now();

    function update() {
      const deltaTime = Date.now() - lastTime;
      const distance = deltaTime * Snake.SPEED;

      const result = runSnake(distance);
      if (!result) {
        return;
      }

      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }
}
