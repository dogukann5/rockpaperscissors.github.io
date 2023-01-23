// rock - 0 paper - 1 scissors - 2
console.log("Rock-Paper-Scissors")

function playGame(playerMove,computerMove){
     if(playerMove=computerMove){
        return "TRY AGAIN";
     }//else if(playerMove=1 & computerMove=2){

     //}
}

function getComputerChoice(){
    return Math.floor(Math.random() * (2 - 0 + 1) + 0)
}

let moves = ["rock","paper","scissors"];
let playerMove = prompt("Please enter your move");
let computerMove = getComputerChoice;


