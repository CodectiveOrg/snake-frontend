import { Buffer } from "../structures/buffer.ts";
import { VALID_DIRECTIONS } from "../configs/valid-directions.ts";
import { type Direction } from "../types/direction.ts";
import { isDirection } from "../utils/type.utils.ts";

export class Controller {
  public direction: Direction = "KeyD";

  private readonly buffer: Buffer<Direction>;

  public constructor() {
    this.buffer = new Buffer(3);

    this.initEventListeners();
  }

  public get requestedDirection(): string | undefined {
    return this.buffer.peak();
  }

  public consume(): void {
    this.direction = this.buffer.output() ?? this.direction;
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
        this.buffer.input(e.code);
      }
    });
  }

  private shouldRegisterInput(newDirection: Direction): boolean {
    const previousDirection = this.buffer.peak() || this.direction;
    return VALID_DIRECTIONS[previousDirection].includes(newDirection);
  }
}
