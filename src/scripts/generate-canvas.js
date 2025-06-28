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
