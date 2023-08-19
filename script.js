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

