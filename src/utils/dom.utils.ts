export const DOM = {
  get introSection() {
    return select("section#intro");
  },
  get introForm() {
    return select<HTMLFormElement>("section#intro form");
  },
  get gameSection() {
    return select("section#game");
  },
  get nameSpan() {
    return select("#name");
  },
  get score() {
    return select("#score");
  },
  get canvas() {
    return select<HTMLCanvasElement>("canvas");
  },
  get buffer() {
    return select("#buffer");
  },
  get board() {
    return select(".container");
  },
};

function select<T extends Element = HTMLElement>(selectors: string): T {
  const element = document.querySelector<T>(selectors);

  if (!element) {
    throw new Error(`Element "${selectors}" not found.`);
  }

  return element;
}
