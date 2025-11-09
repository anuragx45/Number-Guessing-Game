let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("check");
const resetBtn = document.getElementById("reset");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

checkBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "❌ Enter a number between 1 and 100";
    return;
  }

  attempts--;
  attemptsDisplay.textContent = attempts;

  if (guess === secret) {
    message.textContent = ` Correct! The number was ${secret}`;
    checkBtn.disabled = true;
  } else if (guess > secret) {
    message.textContent = " Too high!";
  } else {
    message.textContent = " Too low!";
  }

  if (attempts === 0 && guess !== secret) {
    message.textContent = ` Game Over! The number was ${secret}`;
    checkBtn.disabled = true;
  }
});

resetBtn.addEventListener("click", () => {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 10;
  attemptsDisplay.textContent = attempts;
  message.textContent = "Start guessing...";
  guessInput.value = "";
  checkBtn.disabled = false;
});
