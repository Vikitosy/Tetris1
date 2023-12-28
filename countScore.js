let totalScore = 0;

const scoreEl = document.querySelector(".totalScore p");

const scorePoint = {
  1: 10,
  2: 25,
  3: 50,
  4: 100,
};

export function countScore(row) {
  totalScore += scorePoint[`${row}`];

  scoreEl.textContent = `${totalScore}`;
  return totalScore;
}
