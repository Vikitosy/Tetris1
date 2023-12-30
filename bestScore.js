import { game } from "./game.js";

// gameOverBestScore;

export const bestScoreEl = document.querySelector(".bestScore p");

export function bestScore() {
  if (game.bestScore < game.totalScore) {
    game.bestScore= game.totalScore;
  }

  bestScoreEl.textContent = `${game.bestScore}`;

  return game.bestScore;
}

export function saveBestScore() {
  localStorage.setItem("best-Score", JSON.stringify(game.bestScore));
}

export function extractBestScore() {
  const savedBestScore = localStorage.getItem("best-Score");
  const parsedBestScore = JSON.parse(savedBestScore);

  game.bestScore = parsedBestScore;
  return game.bestScore;
}
