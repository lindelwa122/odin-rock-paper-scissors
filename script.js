const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const getRoundWinner = (playerSelection, computerSelection) => {
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  )
    return "computer";
  else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection == "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")
  )
    return "player";
  else return "draw";
};

const displayResult = (result) => {
  const resultDisplay = document.querySelector(".result-display");
  resultDisplay.textContent = result;
};

const playRound = (playerSelection, computerSelection) => {
  const winner = getRoundWinner(playerSelection, computerSelection);

  if (winner === "draw") {
    displayResult("It's a draw");
  } else if (winner === "computer") {
    displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
  } else {
    displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
  }
};

let computerScore = 0;
let playerScore = 0;
let round = 1;

const game = (playerSelection, computerSelection) => {
  let winner;

  if (round++ > 5) return;

  winner = getRoundWinner(playerSelection, computerSelection);

  if (winner === "computer") computerScore++;
  else if (winner === "player") playerScore++;
};

const getFinalResults = () => {
  if (computerScore > playerScore) {
    return "You lost!";
  } else if (computerScore < playerScore) {
    return "You won!";
  } else return "It's a draw!";
};

const updateUI = () => {
  const playerScoreUI = document.querySelector(".player-score");
  const computerScoreUI = document.querySelector(".computer-score");
  const roundUI = document.querySelector(".round");

  playerScoreUI.textContent = playerScore;
  computerScoreUI.textContent = computerScore;

  if (round > 5) {
    const winnerDisplay = document.querySelector(".winner-display");
    winnerDisplay.textContent = getFinalResults();
    toggleVisibilityOnResetButton();
    return;
  }

  roundUI.textContent = round;
};

const resetGame = () => {
  computerScore = 0;
  playerScore = 0;
  round = 1;

  const winnerDisplay = document.querySelector(".winner-display");
  const resultDisplay = document.querySelector(".result-display");

  winnerDisplay.textContent = "";
  resultDisplay.textContent = "";

  updateUI();
};

const toggleVisibilityOnResetButton = () => {
  const resetButton = document.querySelector(".reset");
  resetButton.classList.toggle("d-none");
};

const playButtons = document.querySelectorAll(".play-button");

playButtons.forEach((playButton) => {
  playButton.addEventListener("click", () => {
    if (round > 5) return;

    const playerSelection = playButton.dataset.hand;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    game(playerSelection, computerSelection);
    updateUI();
  });
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  resetGame();
  toggleVisibilityOnResetButton();
});
