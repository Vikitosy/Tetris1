import {TETROMINO_NAMES, TETROMINOES, PLAYFIELD_COLUMNS} from './constants.js';
import {getRandomHexColor, getRandomTetromino} from './utility.js'

export let tetromino;

export function generateTetromino() {
  const nameTetro = TETROMINO_NAMES[getRandomTetromino(TETROMINO_NAMES.length)];
  const matrixTetro = TETROMINOES[nameTetro];

  const columnTetro = Math.floor((PLAYFIELD_COLUMNS - 3) / 2);
  const rowTetro = -2;

  // const colorTetro = getRandomHexColor();

  tetromino = {
    name: nameTetro,
    matrix: matrixTetro,
    row: rowTetro,
    column: columnTetro,
    // color: colorTetro,
  };
}
