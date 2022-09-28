let pOne = document.querySelector(".player-one");
let pTwo = document.querySelector(".player-two");
let p1Display = document.querySelector(".p1Display");
let p2Display = document.querySelector(".p2Display");
let numInput = document.querySelector("input");
let playingTime = document.querySelector("p span");
let resetButton = document.querySelector(".reset");

let pOneScore = 0;
let pTwoScore = 0;
gameOver = false;
targetScore = 5;

pOne.addEventListener("click", function () {
  if (!gameOver) {
    pOneScore++;
  }
  if (pOneScore === targetScore) {
    p1Display.classList.add("winner");
    gameOver = true;
  }
  p1Display.textContent = pOneScore;
});

pTwo.addEventListener("click", function () {
  if (!gameOver) {
    pTwoScore++;
  }
  if (pTwoScore === targetScore) {
    p2Display.classList.add("winner");
    gameOver = true;
  }
  p2Display.textContent = pTwoScore;
});

resetButton.addEventListener("click", function () {
  reset();
  // pOneScore = 0;
  // pTwoScore = 0;
  // p1Display.textContent = 0;
  // p2Display.textContent = 0;
  // p1Display.classList.remove("winner");
  // p2Display.classList.remove("winner");
  // gameOver = false;
});

function reset() {
  pOneScore = 0;
  pTwoScore = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function () {
  playingTime.textContent = numInput.value;
  targetScore = Number(numInput.value);
  reset();
});
