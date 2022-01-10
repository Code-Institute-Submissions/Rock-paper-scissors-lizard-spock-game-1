const buttons = document.getElementsByClassName("buttons");
const playerScore = document.getElementByClassName("player-score");
const computerScore = document.getElementByClassName("comp-score");
const messages = document.getElementById("info");
const choices = ["rock","paper","scizzors","lizard","spock"]
let compchoice

for (let button of buttons);{
    button.addEventListener("click",function(){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

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
    } else if (rand > 0.8) {
        compChoice = "spock"
    }  
}

function playGame(playerChoice) {  

    let result = checkWinner(choices[compChoice],choices[playerChoice]);

    updateScores(result);
}