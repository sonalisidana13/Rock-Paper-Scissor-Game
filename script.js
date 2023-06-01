const finalScore = { playerScore: 0 };

function getComputerChoice() {

  const rpsChoices = ['Rock', 'Paper', 'Scissor'];
  const randomChoice = Math.floor(Math.random() * 3);
  return rpsChoices[randomChoice];

}

function getResult(playerChoice, computerChoice) {

  score = 0;
  if (playerChoice === computerChoice)
    score = 0;
  else if (playerChoice == 'Rock' && computerChoice == 'Scissor')
    score = 1;
  else if (playerChoice == 'Paper' && computerChoice == 'Rock')
    score = 1;
  else if (playerChoice == 'Scissor' && computerChoice == 'Paper')
    score = 1;
  else
    score = -1;

  return score;

}

function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const scoreDiv = document.getElementById('player-score');

  if (score === -1)
    resultDiv.innerText = 'You Lose!'
  else if (score === 0)
    resultDiv.innerText = 'You have a draw!'
  else
    resultDiv.innerText = 'You Won!'

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`;

  scoreDiv.innerText = finalScore['playerScore'];
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  finalScore['playerScore'] += score;
  showResult(score, playerChoice, computerChoice);

}

function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons.forEach(button => {
    button.onclick = () => onClickRPS(button.value)
  })

  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame(finalScore);

}

function endGame() {

  finalScore['playerScore'] = 0;

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const scoreDiv = document.getElementById('player-score');

  resultDiv.innerText = '';
  handsDiv.innerText = '';
  scoreDiv.innerText = '';

}

playGame()