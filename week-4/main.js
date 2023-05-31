// Create an array that contains the variables Rock, Paper, and Scissors.
const myArr = ["Rock", "Paper", "Scissors"];

// Set up a variable that generates a random number 0-2 for the player
let player = Math.floor(Math.random() * 3);

// Set up a variable that generates a random number 0-2 for the computer
let computer = Math.floor(Math.random() * 3);

// Create a variable to hold a response message to the user
let message = "player " + myArr[player] + " vs computer " + myArr[computer] + " ";

// Check if the player and computer selections are the same
if (player === computer) {
  // If they are, it is a tie
  message += "It is a tie";
} else {
  // If they are not, check who won
  if (myArr[player] === "Rock" && myArr[computer] === "Scissors") {
    // Rock beats scissors, so the player wins
    message += "player wins!";
  } else if (myArr[player] === "Paper" && myArr[computer] === "Rock") {
    // Paper beats rock, so the player wins
    message += "player wins!";
  } else if (myArr[player] === "Scissors" && myArr[computer] === "Paper") {
    // Scissors beats paper, so the player wins
    message += "player wins!";
  } else {
    // The computer wins
    message += "computer wins!";
  }
}

// Display the message to the user
console.log(message);
