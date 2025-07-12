import type { Point } from "../types/point.ts";
import { Controller } from "./controller.ts";

export class Snake {
  public static readonly SPEED = 8 / 1000;

  public body: Point[] = [
    { x: 1, y: 3 },
    { x: 3, y: 3 },
  ];

  public constructor(private controller: Controller) {}

  private moveBody(index: number, direction: string, distance: number): void {
    const { x, y } = this.body[index];

    switch (direction) {
      case "KeyS":
        this.body[index] = { x, y: y + distance };
        break;
      case "KeyW":
        this.body[index] = { x, y: y - distance };
        break;
      case "KeyD":
        this.body[index] = { x: x + distance, y };
        break;
      default:
        this.body[index] = { x: x - distance, y };
    }
  }

  private recur(totalDistance: number): void {
    const currentDistance = Math.abs(
      this.body[0].x === this.body[1].x
        ? this.body[1].y - this.body[0].y
        : this.body[1].x - this.body[0].x,
    );

    if (currentDistance > totalDistance) {
      this.moveBody(0, this.dir(0, 1), totalDistance);
    } else {
      this.body.shift();
      this.recur(totalDistance - currentDistance);
    }
  }

  private dir(firstIndex: number, secondIndex: number): string {
    if (this.body[secondIndex].y - this.body[firstIndex].y > 0) {
      return "KeyS";
    }

    if (this.body[secondIndex].y - this.body[firstIndex].y < 0) {
      return "KeyW";
    }

    if (this.body[secondIndex].x - this.body[firstIndex].x > 0) {
      return "KeyD";
    }

    return "KeyA";
  }

  private moveToTurningPoint(distance: number): number {
    const { x, y } = this.body.at(-1)!;

    let remainingDistanceToWholeNumber = 0;

    switch (this.controller.direction) {
      case "KeyS":
        remainingDistanceToWholeNumber = Math.floor(y + distance) - y;
        break;
      case "KeyW":
        remainingDistanceToWholeNumber = y - Math.ceil(y - distance);
        break;
      case "KeyD":
        remainingDistanceToWholeNumber = Math.floor(x + distance) - x;
        break;
      default:
        remainingDistanceToWholeNumber = x - Math.ceil(x - distance);
    }

    if (remainingDistanceToWholeNumber <= 0) {
      return 0;
    }

    this.moveBody(
      this.body.length - 1,
      this.controller.direction,
      remainingDistanceToWholeNumber,
    );

    this.recur(remainingDistanceToWholeNumber);

    this.body.push({ ...this.body.at(-1)! });

    this.controller.consume();

    return remainingDistanceToWholeNumber;
  }

  public move(distance: number): boolean {
    if (this.controller.requestedDirection) {
      const consumedDistance = this.moveToTurningPoint(distance);
      distance -= consumedDistance;
    }

    this.moveBody(this.body.length - 1, this.controller.direction, distance);
    this.recur(distance);

    // if (shouldSnakeStayAtSameSize) {
    //   this.updateSnake();
    // }
    //
    // const newCell = this.newHead();
    //
    // if (this.didSnakeEatItself(newCell) || this.didSnakeHitWall(newCell)) {
    //   return false;
    // } else {
    //   this.goAhead(newCell);
    // }
    //
    // if (this.isFoodEaten(snake.at(-1))) {
    //   scoreCounter++;
    //   score.textContent = scoreCounter.toString();
    //
    //   this.food.generateFood();
    //
    //   shouldSnakeStayAtSameSize = false;
    // } else {
    //   shouldSnakeStayAtSameSize = true;
    // }

    return true;
  }

  // private isFoodEaten({ x, y }: Point): boolean {
  //   return x === food.x && y === food.y;
  // }
  //
  // private goAhead(newCell) {
  //   if (isThereNewDirection) {
  //     snakeNodes.push(newCell);
  //   } else {
  //     snakeNodes[snakeNodes.length - 1] = newCell;
  //   }
  // }
  //
  // private updateSnake(): void {
  //   const tail = this.body[0];
  //   const yestertail = this.body[0];
  //
  //   if (tail.x === yestertail.x) {
  //     if (tail.y > yestertail.y) {
  //       tail.y--;
  //     } else {
  //       tail.y++;
  //     }
  //   } else {
  //     if (tail.x > yestertail.x) {
  //       tail.x--;
  //     } else {
  //       tail.x++;
  //     }
  //   }
  //
  //   if (JSON.stringify(tail) === JSON.stringify(yestertail)) {
  //     this.body.shift();
  //   }
  // }
  //
  // private didSnakeEatItself(head: Point): boolean {
  //   for (let i = 0; i < this.body.length - 1; i++) {
  //     if (this.body[i].x === head.x && this.body[i].y === head.y) {
  //       return true;
  //     }
  //   }
  //
  //   return false;
  // }
  //
  // private didSnakeHitWall(head: Point): boolean {
  //   return head.x < 0 || head.y < 0 || head.x > 29 || head.y > 19;
  // }
}
