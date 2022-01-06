const buttons = document.getElementsByClassName("buttons");
const playerScore = document.getElementByClassName("player-score");
const computerScore = document.getElementByClassName("comp-score");

for (let button of buttons);{
    button.addEventListener("click",function(){
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}