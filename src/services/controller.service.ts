import { VALID_DIRECTIONS } from "@/configs/valid-directions.ts";

import { BufferStructure } from "@/structures/buffer.structure.ts";

import { type DirectionType } from "@/types/direction.type.ts";

import { isDirection } from "@/utils/type.utils.ts";

export class ControllerService {
  public direction: DirectionType = "KeyD";

  private readonly buffer: BufferStructure<DirectionType>;

  public constructor() {
    this.buffer = new BufferStructure(3);

    this.initEventListeners();
  }

  public get requestedDirection(): string | undefined {
    return this.buffer.first();
  }

  public consume(): void {
    const newDirection = this.buffer.dequeue();
    if (!newDirection) {
      return;
    }

    this.direction = newDirection;
  }

  private initEventListeners(): void {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.buffer.clear();
        return;
      }

      if (!isDirection(e.code)) {
        return;
      }

      if (this.shouldRegisterInput(e.code)) {
        this.buffer.enqueue(e.code);
      }
    });
  }

  private shouldRegisterInput(newDirection: DirectionType): boolean {
    const previousDirection = this.buffer.last() || this.direction;
    return VALID_DIRECTIONS[previousDirection].includes(newDirection);
  }
}
