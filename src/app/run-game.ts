import { snake, snakeNodes } from "../Entities/snake.ts";
import { food } from "../Entities/food.ts";
import { didSnakeEatItself, didSnakeHitWall } from "./rules";
import { Buffer } from "../structures/buffer.ts";
import { DOM } from "../utils/dom.utils.ts";
import type { Point } from "../types/point.ts";

let intervalId;
let shouldSnakeStayAtSameSize = true;
let direction = "KeyD";
let isThereNewDirection = false;

let scoreCounter = 0;

const score = DOM.score;

const buffer = new Buffer(3);

export function runSnake(distance): boolean {
  this.canvas.clear();
  this.canvas.drawFood(this.food.coords);

  this.controller.read();

  if (shouldSnakeStayAtSameSize) {
    updateSnake();
  }

  const newCell = newHead();

  if (didSnakeEatItself(newCell) || didSnakeHitWall(newCell)) {
    return false;
  } else {
    goAhead(newCell);
  }

  if (isFoodEaten(snake.at(-1))) {
    scoreCounter++;
    score.textContent = scoreCounter.toString();

    this.food.generateFood();

    shouldSnakeStayAtSameSize = false;
  } else {
    shouldSnakeStayAtSameSize = true;
  }

  this.canvas.drawSnake();

  return true;
}

function newHead(): Point {
  const { x, y } = this.master.snake.body.at(-1);

  if (direction === "KeyS") {
    return { x, y: y + 1 };
  } else if (direction === "KeyW") {
    return { x, y: y - 1 };
  } else if (direction === "KeyD") {
    return { x: x + 1, y };
  } else {
    return { x: x - 1, y };
  }
}

function isFoodEaten({ x, y }) {
  return x === food.x && y === food.y;
}

function goAhead(newCell) {
  if (isThereNewDirection) {
    snakeNodes.push(newCell);
  } else {
    snakeNodes[snakeNodes.length - 1] = newCell;
  }
}

function updateSnake(): void {
  const snakeBody = this.master.snake.body;

  const tail = snakeBody[0];
  const yestertail = snakeBody[0];

  if (tail.x === yestertail.x) {
    if (tail.y > yestertail.y) {
      tail.y--;
    } else {
      tail.y++;
    }
  } else {
    if (tail.x > yestertail.x) {
      tail.x--;
    } else {
      tail.x++;
    }
  }

  if (JSON.stringify(tail) === JSON.stringify(yestertail)) {
    snakeBody.shift();
  }
}
