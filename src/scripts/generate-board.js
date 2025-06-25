export const cells = [];

export function generateBoard() {
  const board = document.querySelector(".container");

  for (let i = 0; i < 20; i++) {
    const row = [];

    for (let j = 0; j < 30; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      board.appendChild(cell);

      row.push(cell);
    }
    cells.push(row);
  }
}
