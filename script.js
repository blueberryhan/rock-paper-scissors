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
    and the computer chose scissors. your huge, hard rock
    pounded those flimsy scissors hard. now, the computer wont be coming home
    to his children.`;

} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'it\'s a tie. you both chose rock. ram ranch really rocks';

} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computerScore.removeChild(computerScore.lastElementChild);
    totalPlayerScore++;
    console.log(totalPlayerScore);
    roundEnd();
    return `you win! you chose paper, and the computer chose rock. the paper
    was a copy of a zootopia fanfiction. it read the paper and gave up on life.`;

} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    playerScore.removeChild(playerScore.lastElementChild);
    totalComputerScore++;
    console.log(totalComputerScore);
    roundEnd();
    return `you lose :c you chose paper and the computer chose scissors. now,
    youre going to have to send $52 to the following venmo account: @thegoatse`;

} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return `it\'s a tie. you both chose paper. did you know that paper was
    invented in lei-yang, china by tsai lun? if that is not correct im sorry.`;

} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    playerScore.removeChild(playerScore.lastElementChild);
    totalComputerScore++;
    console.log(totalComputerScore);
    roundEnd();
    return `you lose. the computer chose rock and you chose scissors. this is
    disappointing, much like my programming abilities.`;

} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerScore.removeChild(computerScore.lastElementChild);
    totalPlayerScore++;
    console.log(totalPlayerScore);
    roundEnd();
    return `you win!!! c: dont listen to the people who upset you. youre
    worth something. everyone loves you. nobody hates you`;

} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return `it\'s a tie. you both chose scissors. now, i will commit sudoku`;

} else {
    return 'wait, what? please input either rock, paper or scissors c:';
}

}

function gameOverWin() {

    let gameOverWin = document.getElementById('game-over-win');
    gameOverWin.style.display = 'block';
}

function gameOverLose() {

    let gameOverLose = document.getElementById('game-over-lose');
    gameOverLose.style.display = 'block';
}

function roundEnd() {
    if (totalPlayerScore === 5) {
        gameOverWin();
        rock.removeEventListener('click', rockChoice);
        paper.removeEventListener('click', paperChoice);
        scissors.removeEventListener('click', scissorsChoice);

    } else if (totalComputerScore === 5) {
        gameOverLose();
        rock.removeEventListener('click', rockChoice);
        paper.removeEventListener('click', paperChoice);
        scissors.removeEventListener('click', scissorsChoice);
    } 
}

roundEnd();
