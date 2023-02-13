/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if(playerChoice == "Rock" && computerChoice == "Rock") {
    score = 0;
    return score;
  }
  else if(playerChoice == "Paper" && computerChoice == "Paper") {
    score = 0;
    return score;
  }
  else if(playerChoice == "Scissors" && computerChoice == "Scissors") {
    score = 0;
    return score;
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if(playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
    return score;
  }
  else if(playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
    return score;
  }
  else if(playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
    return score;
  }
  else {
    score = -1;
    return score;
  }
  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById('result');
  if(score == -1) {
    result.innerText = "You Lose!";
  }
  else if(score == 0) {
    result.innerText = "It's a Draw!";
  }
  else if(score == 1) {
    result.innerText = "You Win!";
  }

  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  playerScore.innerText =  `${Number(playerScore.innerText)+score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const rpsButtons = document.querySelectorAll('.rpsButton');

rpsButtons.forEach(rpsButton => {
  rpsButton.onclick = () => onClickRPS(rpsButton.value);
})
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 const endGameButton = document.getElementById('endGameButton');
 endGameButton.onclick = () => endGame();

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  const result = document.getElementById('result');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
  
}

playGame()
