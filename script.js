const getComputerChoice = () => {
  // create a list called choices that contains "rock", "paper", and "scissors"
  const choices = ["rock", "paper", "scissors"];

  // create a variable called randomNumber of type number that starts with a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);

  // return an item at index randomNumber of choices
  return choices[randomNumber];
}

// create a function called getRoundWinner that takes in playerSelection and computerSelection and returns a string that declares the winner
const getRoundWinner = (playerSelection, computerSelection) => {
  if 
    (
      (computerSelection === "rock" && playerSelection === "scissors")
      || (computerSelection === "paper" && playerSelection === "rock")
      || (computerSelection === "scissors" && playerSelection === "paper")

    ) return "computer";
  

  else if 
    (
      (computerSelection === "rock" && playerSelection === "paper")
      || (computerSelection === "paper" && playerSelection == "scissors")
      || (computerSelection === "scissors" && playerSelection === "rock")
    ) return "player";

  else return "draw";
}

const displayResult = (result) => {
  const resultDisplay = document.querySelector('.result-display');
  resultDisplay.textContent = result;
}

// create a function called playRound that takes in playerSelection and computerSelection and returns a string that declares the winner
const playRound = (playerSelection, computerSelection) => {
  const winner = getRoundWinner(playerSelection, computerSelection);

  if (winner === "draw") {
    displayResult("It's a draw");
  }
  
  else if (winner === "computer") {
    displayResult(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
  
  else {
    displayResult(`You win! ${playerSelection} beats ${computerSelection}`);
  }
}

const getUserHandShape = () => {
  let userChosenHandShape;

  const handShapes = ["rock", "paper", "scissors"];

  // repeatedly run a while loop 
  while (true) {
    // ask the user "Indicate your hand shape?" and store the answer in userChosenHandShape
    userChosenHandShape = prompt("Indicate your hand shape?");

    // if userChosenHandShape is in handShapes
    if (handShapes.includes(userChosenHandShape)) {
      // break out of the loop
      break;
    }
  }

  return userChosenHandShape;
}

let computerScore = 0;
let playerScore = 0;
let round = 1;

const game = (playerSelection, computerSelection) => {
  let winner;

  if (round++ > 5) return;

  winner = getRoundWinner(playerSelection, computerSelection);

  if (winner === "computer") computerScore++;
  else if (winner === "player") playerScore++;
}

const getFinalResults = () => {
  if (computerScore > playerScore) {
    return 'You lost!';
  } else if (computerScore < playerScore) {
    return 'You won!';
  } else return 'It\'s a draw!';
}

const updateUI = () => {
  const playerScoreUI = document.querySelector('.player-score');
  const computerScoreUI = document.querySelector('.computer-score');
  const roundUI = document.querySelector('.round');

  playerScoreUI.textContent = playerScore;
  computerScoreUI.textContent = computerScore;
  
  if (round > 5) {
    const winnerDisplay = document.querySelector('.winner-display');
    winnerDisplay.textContent = getFinalResults();
    return;
  }

  roundUI.textContent = round;
}

// game();

const playButtons = document.querySelectorAll('.play-button');

playButtons.forEach((playButton) => {
  playButton.addEventListener('click', () => {
    if (round > 5) return; 

    const playerSelection = playButton.dataset.hand;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    game(playerSelection, computerSelection);
    updateUI();
  });
})