const buttons = document.getElementsByClassName("buttons");
const playerScore = document.getElementByClassName("player-score");
const computerScore = document.getElementByClassName("comp-score");
const messages = document.getElementById("info");
const choices = ["rock","paper","scizzors","lizard","spock"]

for (let button of buttons);{
    button.addEventListener("click",function(){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {
    let compChoice = Math.random()
    if (compChoice <=0.2){
        compChoice = "scizzors"
    } else if (compChoice <= 0.4){
        compChoice = "paper"
    } else if (compChoice <= 0.6){
        compChoice = "rock"
    } else if (compChoice <= 0.8){
        compChoice = "lizard"
    } else {
        compChoice = "spock"
    }    

    let result = checkWinner(choices[compChoice],choices[playerChoice]);

    updateScores(result);
}