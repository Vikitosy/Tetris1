import { draw } from "./draw.js";

import {
  moveTetrominoDown,
  moveTetrominoLeft,
  moveTetrominoRight,
  onKeyDown,
} from "./move.js";

// import { isGameOver } from "./placeTetromino.js";

import { generatePlayfield } from "./generatePlayfield.js";
import { generateTetromino } from "./generateTetromino.js";
import { rotateTetromino } from "./rotateTetromino.js";

const startBtn = document.querySelector("button[data-start]");
const pauseBtn = document.querySelector("button[data-pause]");
// const restartBtn = document.querySelector("button[data-restart]");
const rotateBtn = document.querySelector("button[data-rotate]");
const leftBtn = document.querySelector("button[data-left]");
const rightBtn = document.querySelector("button[data-right]");
const downBtn = document.querySelector("button[data-down]");




export function initStart() {
  pauseBtn.style.display = "none";

  startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", onKeyDown);
    // restartBtn.addEventListener("click", )
    rotateBtn.addEventListener("click", rotateTetromino);
    leftBtn.addEventListener("click", moveTetrominoLeft);
    rightBtn.addEventListener("click", moveTetrominoRight);
    downBtn.addEventListener("click", moveTetrominoDown);
    
    console.log("start");
    startLoop();
    pauseBtn.style.display = "block";
    startBtn.style.display = "none";
  });

  pauseBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", onKeyDown);
    stopLoop();
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
  });
}

let timeoutId;
let requestId;


let isGameOver;

// const game = {
//   isGameOver,
// };

export function setIsGameOver(newValue) {
  isGameOver = newValue;
}

const gameOverBlock = document.querySelector(".game-over");

function gameOver() {
  stopLoop();
  gameOverBlock.style.display = "flex";
}

const btnRestart = document.querySelector(".restart");

btnRestart.addEventListener("click", function () {
  gameOverBlock.style.display = "none";
  setIsGameOver(false);
  generatePlayfield();
  generateTetromino();
});

function moveDown() {
  moveTetrominoDown();
  draw();
  stopLoop();
  startLoop();
  if (isGameOver) {
    gameOver();
  }
}

export function startLoop() {
  timeoutId = setTimeout(
    () => (requestId = requestAnimationFrame(moveDown)),
    700
  );
}

export function stopLoop() {
  cancelAnimationFrame(requestId);
  timeoutId = clearTimeout(timeoutId);
}
