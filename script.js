function getComputerChoice() {
    let computerChoices = ['rock','paper','scissors'];
    // declaring the array i.e. the choices that the computer can make //
    let randomComputerChoice = Math.floor(Math.random() * computerChoices.length);
    // a random number is generated based on the amount of choices available in the computerChoices array. //
    // the number generated correlates to its respective string in the array //
    return computerChoices[randomComputerChoice];
    // the randomly generated number is then passed //
    // through the computerChoices array which selects the computer's choice //
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', rockChoice);

const paper = document.querySelector('#paper');
paper.addEventListener('click', paperChoice);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', scissorsChoice);

const results = document.querySelector(".results");

function rockChoice() {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    results.removeChild(results.lastChild);
    const textResults = document.createElement('p');
    textResults.classList.add('text-results');
    // add class style
    textResults.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(textResults);
}

function paperChoice() {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    results.removeChild(results.lastChild);
    const textResults = document.createElement('p');
    textResults.classList.add('text-results');
    textResults.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(textResults);
}

function scissorsChoice() {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    results.removeChild(results.lastChild);
    const textResults = document.createElement('p');
    textResults.classList.add('text-results');
    textResults.textContent = playRound(playerSelection, computerSelection);
    results.appendChild(textResults);
}

function playRound(playerSelection, computerSelection) {

    const playerScore = document.querySelector('.player-score');
    const playerScoreValue = document.createElement('div');
    playerScoreValue.classList.add('.player-score-value');

    const computerScore = document.querySelector('.computer-score');
    const computerScoreValue = document.createElement('div');
    computerScoreValue.classList.add('.computer-score-value');

    if (playerSelection === 'rock' && computerSelection === 'paper') {  
    computerScoreValue.textContent = '.';
    computerScore.appendChild(computerScoreValue);
    return 'you lose, idiot';

} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScoreValue.textContent = '.';
    playerScore.appendChild(playerScoreValue);
    return 'you win, good job!';
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'it\'s a tie';
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScoreValue.textContent = '.';
    playerScore.appendChild(playerScoreValue);
    return 'you win!';
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScoreValue.textContent = '.';
    computerScore.appendChild(computerScoreValue);
    return 'you lose :c';
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'it\'s a tie';
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScoreValue.textContent = '.';
    computerScore.appendChild(computerScoreValue);
    return 'you lose, loser';
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScoreValue.textContent = '.';
    playerScore.appendChild(playerScoreValue);
    return 'you win!!! c:';
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'it\'s a tie';
} else {
    return 'wait, what? please input either rock, paper or scissors c:';
}

}


