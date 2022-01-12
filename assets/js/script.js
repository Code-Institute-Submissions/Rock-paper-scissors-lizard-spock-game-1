const buttons = document.querySelectorAll("button");
const playerScore = document.getElementsByClassName("player-score");
const computerScore = document.getElementsByClassName("comp-score");
const messages = document.getElementById("info");
let compchoice
let playerChoice
let message

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id
    compChoice()
    result()
}))

function compChoice() {
    const rand = Math.random()
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
    console.log(compChoice) 
}

function result() {  
    if (compChoice === playerChoice){
        message = "Its a draw"
    } else if(playerChoice === "Spock" && compChoice === "scizzors"){
        message = "spock beats scizzors you win"
    } else if(playerChoice === "Spock" && compChoice === "rock"){
        message = "spock beats rock you win"
    } else if(playerChoice === "Scizzors" && compChoice === "lizard"){
        message = "scizzors beats lizard you win"
    } else if(playerChoice === "Scizzors" && compChoice === "paper"){
        message = "scizzors beats paper you win"
    } else if(playerChoice === "Paper" && compChoice === "rock"){
        message = "paper beats rock you win"
    } else if(playerChoice === "Paper" && compChoice === "spock"){
        messages = "paper beats spock you win"
    } else if(playerChoice === "Rock" && compChoice === "spock"){
        message = "rock beats lizard you win"
    } else if(playerChoice === "Rock" && compChoice === "scizzors"){
        message = "rock beats scizzors you win"
    } else if(playerChoice === "Lizard" && compChoice === "spock"){
        message = "lizard beats spock you win"
    } else if(playerChoice ==="Lizard" && compChoice === "paper" ){
        message = "lizard beats paper you win"
    }

    messages.innerHTML = message
}

