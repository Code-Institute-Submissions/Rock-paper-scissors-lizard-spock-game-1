const buttons = document.querySelectorAll("button");
const playerScore = document.getElementsByClassName("player-score");
const computerScore = document.getElementsByClassName("comp-score");
const messages = document.getElementById("info");
let compchoice
let playerChoice

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id
    messages.innerHTML = playerChoice
}))

function compChoice() {
    let rand = Math.random()
    if (rand <=0.2){
        compChoice = "scizzors"
    } else if (rand <= 0.4){
        compChoice = "paper"
    } else if (rand <= 0.6){
        compChoice = "rock"
    } else if (rand <= 0.8){
        compChoice = "lizard"
    } else {
        compChoice = "spock"
    }  
}

function playGame(playerChoice) {  

    let result = checkWinner(choices[compChoice],choices[playerChoice]);

    updateScores(result);

    console.log(playerChoice)
}

