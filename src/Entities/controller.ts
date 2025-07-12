import { Buffer } from "../structures/buffer.ts";

export class Controller {
  public direction: string = "KeyD";
  public previousDirection: string = "KeyD";

  private buffer: Buffer<string>;

  public constructor() {
    this.buffer = new Buffer<string>(3);

    this.initEventListeners();
  }

  public read(): void {
    const newDirection = this.buffer.output();

    if (newDirection === this.direction) {
      return;
    }

    if (
      (newDirection === "KeyA" && this.direction !== "KeyD") ||
      (newDirection === "KeyD" && this.direction !== "KeyA") ||
      (newDirection === "KeyW" && this.direction !== "KeyS") ||
      (newDirection === "KeyS" && this.direction !== "KeyW")
    ) {
      this.previousDirection = this.direction;
      this.direction = newDirection;
    }
  }

  private initEventListeners(): void {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        this.buffer.clear();
        return;
      }

      this.buffer.input(e.code);
    });
  }
}
