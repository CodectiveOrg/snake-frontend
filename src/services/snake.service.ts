import { CanvasService } from "@/services/canvas.service.ts";
import { ControllerService } from "@/services/controller.service.ts";

import type { PointType } from "@/types/point.type.ts";

import {
  calculateDirection,
  calculateDistance,
  doesPointCollideWithLine,
  doesPointCollideWithPoint,
  findDistanceToTurn,
  movePoint,
} from "@/utils/geometry.utils.ts";

export class SnakeService {
  public body: PointType[] = [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
  ];

  public tailDebt: number = 0;

  public constructor(private controller: ControllerService) {}

  public get head(): PointType {
    return this.body.at(-1)!;
  }

  public get intHead(): PointType {
    return {
      x: Math.floor(this.head.x),
      y: Math.floor(this.head.y),
    };
  }

  public move(distance: number): void {
    if (this.controller.requestedDirection) {
      const travelledDistance = this.moveToTurningPoint(distance);
      distance -= travelledDistance;
    }

    this.moveHead(distance);
    this.moveTail(distance);
  }

  public doesCollideWithPoint(point: PointType, offset: number = 1): boolean {
    for (let i = 1; i <= this.body.length - offset; i++) {
      if (doesPointCollideWithLine(point, this.body[i], this.body[i - 1])) {
        return true;
      }
    }

    return false;
  }

  public doesCollideWithItself(): boolean {
    return this.doesCollideWithPoint(this.intHead, 3);
  }

  public doesCollideWithFood(food: PointType): boolean {
    return doesPointCollideWithPoint(this.head, food);
  }

  public doesCollideWithWall(): boolean {
    return (
      this.head.x < 0 ||
      this.head.y < 0 ||
      this.head.x >= CanvasService.BOARD_WIDTH ||
      this.head.y >= CanvasService.BOARD_HEIGHT
    );
  }

  private moveToTurningPoint(distance: number): number {
    const distanceToTurn = findDistanceToTurn(
      this.head,
      this.controller.direction,
    );

    if (distanceToTurn > distance) {
      return 0;
    }

    this.moveHead(distanceToTurn);
    this.moveTail(distanceToTurn);

    this.body.push({ ...this.head });

    this.controller.consume();

    return distanceToTurn;
  }

  private moveHead(distance: number): void {
    this.body[this.body.length - 1] = movePoint(
      this.body[this.body.length - 1],
      this.controller.direction,
      distance,
    );
  }

  private moveTail(totalDistance: number): void {
    if (this.tailDebt >= totalDistance) {
      this.tailDebt -= totalDistance;
      return;
    }

    totalDistance -= this.tailDebt;
    this.tailDebt = 0;

    const distanceToNextPoint = calculateDistance(this.body[0], this.body[1]);

    if (totalDistance < distanceToNextPoint) {
      const direction = calculateDirection(this.body[0], this.body[1]);
      this.body[0] = movePoint(this.body[0], direction, totalDistance);
    } else {
      this.body.shift();
      this.moveTail(totalDistance - distanceToNextPoint);
    }
  }
}
