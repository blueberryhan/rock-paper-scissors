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


console.log(getComputerChoice());