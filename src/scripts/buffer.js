export class Buffer {
  #capacity;
  #items;

  constructor(capacity = 10, items = []) {
    this.#capacity = capacity;
    this.#items = [...items];
  }

  input(value) {
    if (this.#items.length >= this.#capacity) {
      return;
    }

    this.#items.push(value);
  }

  output() {
    if (this.#items.length === 0) {
      return;
    }

    return this.#items.shift();
  }

  clear() {
    this.#items = [];
  }
}
