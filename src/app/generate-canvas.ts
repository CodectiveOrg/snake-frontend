export function generateCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  canvas.id = "canvas";

  document.querySelector("main").appendChild(canvas);
}

export function generateSquare(row, col, color = "black") {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = color;

  ctx.fillRect(col * 16, row * 16, 16, 16);
}

export function generateRectangle(startX, startY, endX, endY, color = "black") {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = color;

  if (startX === endX) {
    if (endY - startY >= 0) {
      ctx.fillRect(startX * 16, startY * 16, 16, (endY - startY + 1) * 16);
    } else {
      ctx.fillRect(startX * 16, startY * 16, 16, (endY - startY) * 16);
    }
  } else {
    if (endX - startX >= 0) {
      ctx.fillRect(startX * 16, startY * 16, (endX - startX + 1) * 16, 16);
    } else {
      ctx.fillRect(startX * 16, startY * 16, (endX - startX) * 16, 16);
    }
  }
}

export function clearCanvas() {
  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
