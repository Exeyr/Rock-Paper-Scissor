// 0. Create an Array for the 3 choices
const PossibleChoices = ["Rock", "Paper", "Scissors"];
// 1. Get computers random choice of Rock, Paper or Scissors
var ComputerChoice = PossibleChoices[Math.floor(Math.random() * 3)]
// Check 1. -> This array method works, it chooses a random variable each time
// 2. Get the players input of Rock, Paper or Scissors
// 2.5 Do this with a series of buttons labeled "Rock", "Paper" and "Scissors"
// Check 2. and 2.5 -> Buttons have been created, in 3. will attatch functions to them
// 3. Have a function compare the players choice to the computers based on a set of rules
// 3.1 PlayerChoice = Rock, then
// 3.1.1 ComputerChoice = Rock -> "It's a Tie!"
// 3.1.2 ComputerChoice = Paper -> "You Lose!"
// 3.1.3 ComputerChoice = Scissors -> "You Win!"
// 3.2 Player Choice = Paper, then
// 3.2.1 ComputerChoice = Rock -> "You Win!"
// 3.2.2 ComputerChoice = Paper -> "It's a Tie!"
// 3.2.3 ComputerChoice = Scissors -> "You Lose!"
// 3.3 PlayerChoice = Scissors, then
// 3.3.1 ComputerChoice = Rock -> "You Lose!"
// 3.3.2 ComputerChoice = Paper -> "You Win!"
// 3.3.3 ComputerChoice = Scissors -> "It's a Tie!"
// 4. Display the result on the webpage
// 5. Have an option to play a GAME of 5 rounds that keeps score
// 6. Have a reset button to essentially referesh the page
