export class Buffer {
  #capacity;
  #items;

  constructor(capacity = 10, items = []) {
    this.#capacity = capacity;
    this.#items = [...items];

    this.#render();
  }

  input(value) {
    if (this.#items.length >= this.#capacity) {
      return;
    }

    this.#items.push(value);

    this.#render();
  }

  output() {
    if (this.#items.length === 0) {
      return null;
    }

    const removedItem = this.#items.shift();

    this.#render();

    return removedItem;
  }

  clear() {
    this.#items = [];

    this.#render();
  }

  #render() {
    const bufferElement = document.querySelector("#buffer");

    bufferElement.innerHTML = this.#items
      .map((item) => `<div class="item">${item}</div>`)
      .join("\n");
  }
}
