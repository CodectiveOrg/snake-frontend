import { Buffer } from "../structures/buffer.ts";

export class Controller {
  private buffer: Buffer<string>;
  private direction: string = "KeyD";

  public constructor() {
    this.buffer = new Buffer<string>(3);

    this.initEventListeners();
  }

  public read(): void {
    isThereNewDirection = false;

    const newDirection = this.buffer.output();

    if (newDirection === "KeyA" && this.direction !== "KeyD") {
      this.direction = "KeyA";
    } else if (newDirection === "KeyD" && this.direction !== "KeyA") {
      this.direction = "KeyD";
    } else if (newDirection === "KeyW" && this.direction !== "KeyS") {
      this.direction = "KeyW";
    } else if (newDirection === "KeyS" && this.direction !== "KeyW") {
      this.direction = "KeyS";
    } else {
      return;
    }

    isThereNewDirection = true;
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
