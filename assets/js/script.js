const buttons = document.querySelectorAll("button");
const playerScore = document.getElementsByClassName("player-score");
const computerScore = document.getElementsByClassName("comp-score");
const messages = document.getElementById("info");
let compchoice
let playerChoice

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = e.target.id
    messages.innerHTML = playerChoice
    compChoice()
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
}

function result() {  
    if (compChoice === playerChoice){
        messages.innerText = "Its a draw"
    } else if(playerChoice === "Spock" && compChoice === "scizzors"){
        messages.innerText = "spock beats scizzors you win"
    } else if(playerChoice === "Spock" && compChoice === "rock"){
        messages.innerText = "spock beats rock you win"
    } else if(playerChoice === "Scizzors" && compChoice === "lizard"){
        messages.innerText = "scizzors beats lizard you win"
    } else if(playerChoice === "Scizzors" && compChoice === "paper"){
        messages.innerText = "scizzors beats paper you win"
    } else if(playerChoice === "Paper" && compChoice === "rock"){
        messages.innerText = "paper beats rock you win"
    } else if(playerChoice === "Paper" && compChoice === "spock"){
        messages.innerText = "paper beats spock you win"
    } else if(playerChoice === "Rock" && compChoice === "spock"){
        messages.innerText = "rock beats lizard you win"
    } else if(playerChoice === "Rock" && compChoice === "scizzors"){
        messages.innerText = "rock beats scizzors you win"
    } else if(playerChoice === "Lizard" && compChoice === "spock"){
        messages.innerText = "lizard beats spock you win"
    } else if(playerChoice ==="Lizard" && compChoice === "paper" ){
        messages.innerText = "lizard beats paper you win"
    }
}

