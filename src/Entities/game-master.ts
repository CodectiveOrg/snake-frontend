import { Snake } from "./snake.ts";
import { Food } from "./food.ts";
import { Canvas } from "../components/canvas.ts";
import { runGame } from "../app/run-game.ts";

export class GameMaster {
  public canvas: Canvas;
  public snake: Snake;
  public food: Food;

  public constructor() {
    this.canvas = new Canvas(this);
    this.snake = new Snake();
    this.food = new Food(this);
  }

  public runGame(): void {
    runGame();
  }
}
