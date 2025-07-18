export class BufferStructure<T> {
  private readonly capacity: number;
  private items: T[];

  constructor(capacity: number = 10, items: T[] = []) {
    this.capacity = capacity;
    this.items = [...items];
  }

  public enqueue(value: T): void {
    if (this.items.length >= this.capacity) {
      return;
    }

    this.items.push(value);
  }

  public dequeue(): T | undefined {
    return this.items.shift();
  }

  public first(): T | undefined {
    return this.items[0];
  }

  public last(): T | undefined {
    return this.items.at(-1);
  }

  public size(): number {
    return this.items.length;
  }

  public clear() {
    this.items = [];
  }
}
