import { Buffer } from "../structures/buffer.ts";

export class Controller {
  public direction: string = "KeyD";

  private buffer: Buffer<string>;

  public constructor() {
    this.buffer = new Buffer<string>(3);

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

      if (this.shouldRegisterInput(e.code)) {
        this.buffer.input(e.code);
        console.log(this.buffer);
      }
    });
  }

  private shouldRegisterInput(newDirection: string): boolean {
    const previousDirection = this.buffer.peak() || this.direction;

    if (newDirection === previousDirection) {
      return false;
    }

    return (
      (newDirection === "KeyA" && previousDirection !== "KeyD") ||
      (newDirection === "KeyD" && previousDirection !== "KeyA") ||
      (newDirection === "KeyW" && previousDirection !== "KeyS") ||
      (newDirection === "KeyS" && previousDirection !== "KeyW")
    );
  }
}
