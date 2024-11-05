"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    displayMessage("🧐 No number!");

    //  when player wins
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    displayMessage("🥳 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    // when gues is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("🫡 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "20rem";
});
