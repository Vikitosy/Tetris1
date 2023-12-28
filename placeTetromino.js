import { tetromino, generateTetromino } from "./generateTetromino.js";
import { playfield } from "./generatePlayfield.js";
import { removeFillRows } from "./removeFillRows.js";
import { findFilledRows } from "./findFilledRows.js";
import { countScore } from "./countScore.js";
import { isOutsideTopBoard } from "./isValid.js";
// import { isGameOver } from "./initStart.js";
import { setIsGameOver } from "./initStart.js";




export function placeTetromino() {
  const matrixSize = tetromino.matrix.length;
  for (let row = 0; row < matrixSize; row++) {
    for (let column = 0; column < matrixSize; column++) {
      if (!tetromino.matrix[row][column]) continue;
      if (isOutsideTopBoard(row)) {
        // isGameOver = true;
        setIsGameOver(true);
        return;
      }
      playfield[tetromino.row + row][tetromino.column + column] =
        tetromino.name;
    }
  }
  const filledRows = findFilledRows();
  console.log(filledRows);
  removeFillRows(filledRows);
  if (filledRows != 0) {
    countScore(filledRows.length);
  }
  generateTetromino();
}
