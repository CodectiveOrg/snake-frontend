export const DOM = {
  introSection: select("section#intro"),
  introForm: select<HTMLFormElement>("form"),
  gameSection: select("section#game"),
  main: select("main"),
  nameSpan: select("#name"),
};

function select<T extends Element = HTMLElement>(selectors: string): T {
  const element = document.querySelector<T>(selectors);

  if (!element) {
    throw new Error(`Element "${selectors}" not found.`);
  }

  return element;
}
