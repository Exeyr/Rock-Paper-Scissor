// 0. Create an Array for the 3 choices
const PossibleChoices = ["Rock", "Paper", "Scissors"];
// 1. Get computers random choice of Rock, Paper or Scissors  




// Check 1. -> This array method works, it chooses a random variable each time
// 2. Get the players input of Rock, Paper or Scissors
// 2.1 Do this with a series of buttons labeled "Rock", "Paper" and "Scissors"
// 2.2 Store the players choice in a new variable called player choice

document.querySelector('#Rock').onclick = function() {
    PlayRound('Rock');
}
document.querySelector('#Paper').onclick = function() {
    PlayRound('Paper');
}   
document.querySelector("#Scissors").onclick = function () {
    PlayRound('Scissors');
}

// 3. Have a function compare the players choice to the computers based on a set of rules
function PlayRound(PlayerChoice) {
    
    var ComputerChoice = PossibleChoices[Math.floor(Math.random() * PossibleChoices.length)];
    
    if (PlayerChoice === ComputerChoice) {
        document.getElementById('ResultsText').innerHTML = "It's a Tie!";
    } 
    else if (
        (PlayerChoice === "Rock" && ComputerChoice === "Scissors") ||
        (PlayerChoice === "Paper" && ComputerChoice === "Rock") ||
        (PlayerChoice === "Scissors" && ComputerChoice === "Paper")
    ) {
        document.getElementById('ResultsText').innerHTML = "You Win!";
    } 
    else if (
        (PlayerChoice === "Rock" && ComputerChoice === "Paper") ||
        (PlayerChoice === "Paper" && ComputerChoice === "Scissors") ||
        (PlayerChoice === "Scissors" && ComputerChoice === "Rock")
        ) {
        document.getElementById('ResultsText').innerHTML = "You Lose!";
    }
    
}
    


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
