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




function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'you lose, idiot';
} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'you win, good job!';
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'it\'s a tie';
} else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'you win!';
} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'you lose :c';
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'it\'s a tie';
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'you lose, loser';
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'you win!!! c:';
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'it\'s a tie';
}

}

const playerSelection = prompt('please choose either rock, paper, or scissors').toLowerCase();
const computerSelection = getComputerChoice();

console.log('you chose ' + playerSelection);
console.log('the computer chose ' +computerSelection);
console.log(playRound(playerSelection, computerSelection));
