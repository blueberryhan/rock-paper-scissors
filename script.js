function getComputerChoice() {
    let computerChoices = ['rock','paper','scissors'];
    let randomComputerChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomComputerChoice];
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

let totalPlayerScore = 0;
let totalComputerScore = 0;

function playRound(playerSelection, computerSelection) {

    const playerScore = document.querySelector('.player-score');

    const computerScore = document.querySelector('.computer-score');

    if (playerSelection === 'rock' && computerSelection === 'paper') {  
    playerScore.removeChild(playerScore.lastElementChild);
    totalComputerScore++;
    console.log(totalComputerScore);
    roundEnd();
    return `you lose. you chose rock and the computer chose paper. 
    im very sorry. but just know that if this computer loses a set
    amount of times, i will kill him. who am i? you dont need to know that.`;

} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    computerScore.removeChild(computerScore.lastElementChild);
    totalPlayerScore++;
    console.log(totalPlayerScore);
    roundEnd();
    return `you win, good job! im proud of you. you chose rock, 
    and the computer chose scissors. your huge, hard rock completely
    pounded those flimsy scissors. now, the computer wont be coming home
    to his children.`;

} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'it\'s a tie. you both chose rock.';

} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computerScore.removeChild(computerScore.lastElementChild);
    totalPlayerScore++;
    console.log(totalPlayerScore);
    roundEnd();
    return `you win! you chose paper, and the computer chose rock. good job.`;

} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    playerScore.removeChild(playerScore.lastElementChild);
    totalComputerScore++;
    console.log(totalComputerScore);
    roundEnd();
    return `you lose :c you chose paper and the computer chose scissors. now,
    youre going to have to send $52 to the following venmo account: @thegoatse`;

} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'it\'s a tie. you both chose paper.';
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    playerScore.removeChild(playerScore.lastElementChild);
    totalComputerScore++;
    console.log(totalComputerScore);
    roundEnd();
    return 'you lose. the computer chose rock and you chose scissors';
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerScore.removeChild(computerScore.lastElementChild);
    totalPlayerScore++;
    console.log(totalPlayerScore);
    roundEnd();
    return 'you win!!! c:';

} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'it\'s a tie. you both chose scissors.';

} else {
    return 'wait, what? please input either rock, paper or scissors c:';
}

}

function roundEnd() {
    if (totalPlayerScore === 5) {
        alert('you won!');
        rock.removeEventListener('click', rockChoice);
        paper.removeEventListener('click', paperChoice);
        scissors.removeEventListener('click', scissorsChoice);
    } else if (totalComputerScore === 5) {
        alert('the computer won!');
        rock.removeEventListener('click', rockChoice);
        paper.removeEventListener('click', paperChoice);
        scissors.removeEventListener('click', scissorsChoice);
    } 
}

roundEnd();
