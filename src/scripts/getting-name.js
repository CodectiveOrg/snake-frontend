import { generateBoard } from "./generate-board.js";
import { generateSnake } from "./generate-snake.js";
import { generateFood } from "./generate-food.js";
import { runGame } from "./run-game.js";

export function gettingName() {
  const main = document.querySelector("main");
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name-input");
  const nameSpan = document.querySelector("#name");
  const sendName = document.querySelector("#send");
  let valueName;

  form.addEventListener("submit", (e) => e.preventDefault());

  nameInput.addEventListener("change", (e) => (valueName = e.target.value));
  sendName.addEventListener("click", () => getName());

  function getName() {
    nameSpan.textContent = valueName;

    main.removeChild(form);

    generateBoard();
    generateSnake();
    generateFood();
    runGame();
  }
}
