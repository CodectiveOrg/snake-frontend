import { snake, snakeNodes } from "./generate-snake.js";
import { cells } from "./generate-board.js";
import { food, generateFood } from "./generate-food.js";
import { isSnakeEatItself, isSnakeHitWall } from "./rules.js";
import { Buffer } from "./buffer.js";
import { generateSquare } from "./generate-canvas.js";

let intervalId;
let temp;
let direction = "KeyD";
let isThereNewDirection = false;

let scoreCounter = 0;

const score = document.querySelector("#score");

const buffer = new Buffer(3);

export function runGame() {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      buffer.clear();
      return;
    }

    buffer.input(e.code);
  });

  temp = true;

  intervalId = setInterval(() => runSnake(), 100);
  // setupGameLoop();
}

function setupGameLoop() {
  const SPEED_PER_MILLISECOND = 160 / 1000;

  let lastTime = Date.now();

  function update() {
    const deltaTime = Date.now() - lastTime;
    const distance = deltaTime * SPEED_PER_MILLISECOND;

    runSnake(distance);

    requestAnimationFrame(update);

    console.log("deltaTime: ", deltaTime, "distance: ", distance);
  }

  requestAnimationFrame(update);
}

export function runSnake(distance) {
  isThereNewDirection = false;
  setNewDirection();

  if (temp) {
    removeTail(snake[0]);
    snake.shift();

    updateSnake();
  }

  const newCell = newHead();

  if (
    isSnakeEatItself(newCell.x, newCell.y) ||
    isSnakeHitWall(newCell.x, newCell.y)
  ) {
    clearInterval(intervalId);
  } else {
    snake.push(newCell);
    addNewHead(snake[snake.length - 1]);

    goAhead(newCell);
  }

  if (isFoodEaten(snake[snake.length - 1])) {
    scoreCounter++;
    score.textContent = scoreCounter.toString();

    deleteFood();
    generateFood();

    temp = false;
  } else {
    temp = true;
  }

  console.log(JSON.parse(JSON.stringify(snakeNodes)));
}

function newHead() {
  if (direction === "KeyS") {
    return {
      x: snake[snake.length - 1].x,
      y: snake[snake.length - 1].y + 1,
    };
  } else if (direction === "KeyW") {
    return {
      x: snake[snake.length - 1].x,
      y: snake[snake.length - 1].y - 1,
    };
  } else if (direction === "KeyD") {
    return {
      x: snake[snake.length - 1].x + 1,
      y: snake[snake.length - 1].y,
    };
  } else {
    return {
      x: snake[snake.length - 1].x - 1,
      y: snake[snake.length - 1].y,
    };
  }
}

function addNewHead({ x, y }) {
  cells[y][x].classList.add("black");

  // generateSquare(y, x);
}

function removeTail({ x, y }) {
  cells[y][x].classList.remove("black");

  // generateSquare(y, x, "white");
}

export function setNewDirection() {
  const newDirection = buffer.output();

  if (newDirection === "KeyA" && direction !== "KeyD") {
    direction = "KeyA";
  } else if (newDirection === "KeyD" && direction !== "KeyA") {
    direction = "KeyD";
  } else if (newDirection === "KeyW" && direction !== "KeyS") {
    direction = "KeyW";
  } else if (newDirection === "KeyS" && direction !== "KeyW") {
    direction = "KeyS";
  } else {
    return;
  }
  isThereNewDirection = true;
}

function isFoodEaten({ x, y }) {
  return x === food.x && y === food.y;
}

function deleteFood() {
  cells[food.y][food.x].classList.remove("food");
}

function goAhead(newCell) {
  if (isThereNewDirection) {
    snakeNodes.push(newCell);
  } else {
    snakeNodes[snakeNodes.length - 1] = newCell;
  }
}

function updateSnake() {
  if (snakeNodes[0].x === snakeNodes[1].x) {
    if (snakeNodes[0].y > snakeNodes[1].y) {
      snakeNodes[0].y--;
    } else {
      snakeNodes[0].y++;
    }
  } else {
    if (snakeNodes[0].x > snakeNodes[1].x) {
      snakeNodes[0].x--;
    } else {
      snakeNodes[0].x++;
    }
  }

  if (JSON.stringify(snakeNodes[0]) === JSON.stringify(snakeNodes[1])) {
    snakeNodes.shift();
  }
}
