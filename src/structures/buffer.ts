export class Buffer<T> {
  private readonly capacity: number;
  private items: T[];

  constructor(capacity: number = 10, items: T[] = []) {
    this.capacity = capacity;
    this.items = [...items];
  }

  public input(value: T): void {
    if (this.items.length >= this.capacity) {
      return;
    }

    this.items.push(value);
  }

  public output(): T | undefined {
    return this.items.shift();
  }

  public clear() {
    this.items = [];
  }
}
