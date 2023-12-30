import { tetrominoNext } from "./generateTetromino.js";
import { convertPositionToIndex } from "./draw.js";
import { PLAYFIELD_COLUMNS_NEXT, PLAYFIELD_ROWS_NEXT } from "./constants.js";

export let playfieldNext;

export function tetrominoNextField() {
  document.querySelector(".tetromino-field").innerHTML = "";
  for (let i = 0; i < PLAYFIELD_ROWS_NEXT * PLAYFIELD_COLUMNS_NEXT; i++) {
    const div = document.createElement("div");
    document.querySelector(".tetromino-field").append(div);
  }

  playfieldNext = new Array(PLAYFIELD_ROWS_NEXT)
    .fill()
    .map(() => new Array(PLAYFIELD_COLUMNS_NEXT).fill(0));
}

export const cellsNextField = () =>
  document.querySelectorAll(".tetromino-field div");

export function drawtetrominoNextField() {
  for (let row = 0; row < PLAYFIELD_ROWS_NEXT; row++) {
    for (let column = 0; column < PLAYFIELD_COLUMNS_NEXT; column++) {
      if (playfieldNext[row][column] == 0) {
        continue;
      }
      const name = playfieldNext[row][column];
      const cellIndex = convertPositionToIndex(row, column);
      cellsNextField()[cellIndex].classList.add(name);
    }
  }
}

export function drawTetrominoNext() {
  const name = tetrominoNext.name;
  const tetrominoMatrixSize = tetrominoNext.matrix.length;

  for (let row = 0; row < tetrominoMatrixSize; row++) {
    for (let column = 0; column < tetrominoMatrixSize; column++) {
      if (row < 0) {
        continue;
      }
      if (!tetrominoNext.matrix[row][column]) {
        continue;
      }

      const cellIndex = convertPositionToIndex(
        tetrominoNext.row + row + 2,
        tetrominoNext.column + column - 3,
        4 // Next tetromino preview field column count
      );
      cellsNextField()[cellIndex].classList.add(name);
    }
  }
}

export function drawNext() {
  cellsNextField().forEach(function (cell) {
    cell.removeAttribute("class");
  });

  drawtetrominoNextField();

  drawTetrominoNext();
}
