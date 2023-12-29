import { generatePlayfield } from "./generatePlayfield.js";
import { generateTetromino } from "./generateTetromino.js";
import { initStart } from "./initStart.js";

import { game } from "./game.js";

generatePlayfield();
generateTetromino();

initStart();

const playerForm = document.querySelector(".player-form");
const startWindowEl = document.querySelector(".start-game");

// startWindowEl.style.display = "none";

playerForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const player = evt.currentTarget.elements;
  if (player.name.value == "") {
    game.playerName = "Anonimus";
  } else {
    game.playerName = player.name.value;
  }

  console.log(player.name.value);
  startWindowEl.style.display = "none";
  console.log(game);
}
