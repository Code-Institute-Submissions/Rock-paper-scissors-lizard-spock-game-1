const buttons = document.querySelectorAll("button");
const playerScore = document.getElementsByClassName("player-score");
const computerScore = document.getElementsByClassName("comp-score");
const messages = document.getElementById("info");
let compChoice;
let playerChoice;
let message;

buttons.forEach(button => button.addEventListener('click', (e) => {
    playerChoice = button.id;
    console.log(playerChoice)
    cpChoice();
    console.log(compChoice)
    result();
}));

function cpChoice() {
    const rand = Math.random();
    if (rand <=0.2){
        console.log('did I get here',rand)
        compChoice = "scizzors";
    } else if (rand <= 0.4){
        console.log('did I get here',rand)
        compChoice = "paper";
    } else if (rand <= 0.6){
        console.log('did I get here',rand)
        compChoice = "rock";
    } else if (rand <= 0.8){
        console.log('did I get here',rand)
        compChoice = "lizard";
    } else {
        console.log('did I get here',rand)
        compChoice = "spock";
    } 
    console.log(compChoice)
}

function result() {  
    if (compChoice.toLowerCase() === playerChoice.toLowerCase()){
        message = "Its a draw";
    } else if(playerChoice === "Spock" && compChoice === "scizzors"){
        message = "spock beats scizzors you win";
    } else if(playerChoice === "Spock" && compChoice === "rock"){
        message = "spock beats rock you win";
    } else if(playerChoice === "Scizzors" && compChoice === "lizard"){
        message = "scizzors beats lizard you win";
    } else if(playerChoice === "Scizzors" && compChoice === "paper"){
        message = "scizzors beats paper you win";
    } else if(playerChoice === "Paper" && compChoice === "rock"){
        message = "paper beats rock you win";
    } else if(playerChoice === "Paper" && compChoice === "spock"){
        message = "paper beats spock you win";
    } else if(playerChoice === "Rock" && compChoice === "spock"){
        message = "rock beats lizard you win";
    } else if(playerChoice === "Rock" && compChoice === "scizzors"){
        message = "rock beats scizzors you win";
    } else if(playerChoice === "Lizard" && compChoice === "spock"){
        message = "lizard beats spock you win";
    } else if(playerChoice ==="Lizard" && compChoice === "paper" ){
        message = "lizard beats paper you win";
    } else if(compChoice === "spock" && playerChoice === "Scizzors"){
        message = "spock beats scizzors you lose";
    } else if(compChoice === "spock" && playerChoice === "Rock"){
        message = "spock beats rock you lose";
    } else if(compChoice === "scizzors" && playerChoice === "Lizard"){
        message = "scizzors beats lizard you lose";
    } else if(compChoice === "scizzors" && playerChoice === "Paper"){
        message = "scizzors beats paper you lose";
    } else if(compChoice === "paper" && playerChoice === "Rock"){
        message = "paper beats rock you lose";
    } else if(compChoice === "paper" && playerChoice === "Spock"){
        message = "paper beats spock you lose";
    } else if(compChoice === "rock" && playerChoice === "Spock"){
        message = "rock beats lizard you lose";
    } else if(compChoice === "rock" && playerChoice === "Scizzors"){
        message = "rock beats scizzors you lose";
    } else if(compChoice === "lizard" && playerChoice === "Spock"){
        message = "lizard beats spock you lose";
    } else if(compChoice ==="lizard" && playerChoice === "paper" ){
        message = "lizard beats paper you lose";
    }

    messages.innerHTML = message;
}

