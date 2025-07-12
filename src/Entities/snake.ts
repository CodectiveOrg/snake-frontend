import type { Point } from "../types/point.ts";
import { Controller } from "./controller.ts";
import { Canvas } from "../components/canvas.ts";

export class Snake {
  public static readonly SPEED = 16 / 1000;

  public body: Point[] = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
  ];

  public constructor(private controller: Controller) {}

  public get head(): Point {
    return this.body.at(-1)!;
  }

  public get intHead(): Point {
    return {
      x: Math.floor(this.head.x),
      y: Math.floor(this.head.y),
    };
  }

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
    let remainingDistanceToWholeNumber = 0;

    switch (this.controller.direction) {
      case "KeyS":
        remainingDistanceToWholeNumber =
          Math.floor(this.head.y + distance) - this.head.y;
        break;
      case "KeyW":
        remainingDistanceToWholeNumber =
          this.head.y - Math.ceil(this.head.y - distance);
        break;
      case "KeyD":
        remainingDistanceToWholeNumber =
          Math.floor(this.head.x + distance) - this.head.x;
        break;
      default:
        remainingDistanceToWholeNumber =
          this.head.x - Math.ceil(this.head.x - distance);
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

    this.body.push({ ...this.head });

    this.controller.consume();

    return remainingDistanceToWholeNumber;
  }

  public move(distance: number): void {
    if (this.controller.requestedDirection) {
      const travelledDistance = this.moveToTurningPoint(distance);
      distance -= travelledDistance;
    }

    this.moveBody(this.body.length - 1, this.controller.direction, distance);
    this.recur(distance);
  }

  public doesCollideWithFood(food: Point): boolean {
    return this.doesTwoPointsCollide(this.intHead, food);
  }

  public doesCollideWithItself(): boolean {
    for (let i = 1; i <= this.body.length - 3; i++) {
      if (
        this.doesPointCollideWithLine(
          this.intHead,
          this.body[i],
          this.body[i - 1],
        )
      ) {
        return true;
      }
    }

    return false;
  }

  public doesCollideWithWall(): boolean {
    return (
      this.head.x < 0 ||
      this.head.y < 0 ||
      this.head.x >= Canvas.BOARD_WIDTH ||
      this.head.y >= Canvas.BOARD_HEIGHT
    );
  }

  private doesTwoPointsCollide(point1: Point, point2: Point): boolean {
    return Math.abs(point1.x - point2.x) + Math.abs(point1.y - point2.y) < 1;
  }

  private doesPointCollideWithLine(
    point1: Point,
    point2: Point,
    point3: Point,
  ): boolean {
    if (point2.x === point3.x) {
      return (
        point1.x === point2.x &&
        Math.min(point2.y, point3.y) <= point1.y &&
        point1.y <= Math.max(point2.y, point3.y)
      );
    } else if (point2.y === point3.y) {
      return (
        point1.y === point2.y &&
        Math.min(point2.x, point3.x) <= point1.x &&
        point1.x <= Math.max(point2.x, point3.x)
      );
    }

    return false;
  }
}
