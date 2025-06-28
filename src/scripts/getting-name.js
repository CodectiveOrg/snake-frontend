import { generateBoard } from "./generate-board.js";
import { generateSnake, generateSnakeLines } from "./generate-snake.js";
import { generateFood } from "./generate-food.js";
import { runGame } from "./run-game.js";
import { generateCanvas } from "./generate-canvas.js";

export function gettingName() {
  const main = document.querySelector("main");
  const form = document.querySelector("form");
  const nameInput = document.querySelector("#name-input");
  const nameSpan = document.querySelector("#name");
  const sendName = document.querySelector("#send");
  let valueName;

  valueName = localStorage.getItem("name");

  if (valueName) {
    getName();
  }

  form.addEventListener("submit", (e) => e.preventDefault());

  nameInput.addEventListener("change", (e) => (valueName = e.target.value));
  sendName.addEventListener("click", () => {
    if (!valueName) {
      valueName = "Lazy User!";
    }

    localStorage.setItem("name", valueName);

    getName();
  });

  function getName() {
    nameSpan.textContent = valueName;

    main.removeChild(form);

    generateBoard();
    generateCanvas(480, 320);

    generateSnake();
    generateSnakeLines();

    generateFood();
    runGame();
  }
}
