const getComputerChoice = () => {
  // create a list called choices that contains "rock", "paper", and "scissors"
  const choices = ["rock", "paper", "scissors"];

  // create a variable called randomNumber of type number that starts with a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);

  // return an item at index randomNumber of choices
  return choices[randomNumber];
}

// create a function called getWinner that takes in playerSelection and computerSelection and returns a string that declares the winner
const getWinner = (playerSelection, computerSelection) => {
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
}

// create a function called playRound that takes in playerSelection and computerSelection and returns a string that declares the winner
const playRound = (playerSelection, computerSelection) => {
  const winner = getWinner(playerSelection, computerSelection);

  if (playerSelection === computerSelection) {
    console.log("It's a draw");
  }
  
  else if (winner === "computer") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
  
  else {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
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