// rock - 0 paper - 1 scissors - 2

function getComputerChoice(){
    return Math.floor(Math.random() * (2 - 0 + 1) + 0)
}

//let playerM = prompt("Please enter your move");
//let computerM = getComputerChoice();

// if (playerM=="rock") {
//         playerM=0;
// } else if (playerM="paper"){
//         playerM=1;
// }else{
//         playerM=2;
// }

let playersScore = 0;
let computersScore = 0;

function playGame(playerMove,computerMove){
    // if ((playerMove)=(computerMove)) {
    //     console.log("NO WINNER")
    //     //Continue;
    // }else if ((playerMove=0)&(computerMove=1)){
    //     console.log("COMPUTER WON")
        
    // }else if ((playerMove=0)&(computerMove=2)){
    //     console.log("PLAYER WON")
        
    // }else if ((playerMove=1)&(computerMove=0)){
    //     console.log("PLAYER WON")
        
    // }else if ((playerMove=1)&(computerMove=2)){
    //     console.log("COMPUTER WON")
        
    // }else if ((playerMove=2)&(computerMove=0)){
    //     console.log("COMPUTER WON")
        
    // }else if ((playerMove=2)&(computerMove=1)){
    //     console.log("PLAYER WON")
        
    // }else{
    //     console.log("SOMETHING WRONG!")
        
    // }


    // if (playerMove==computerMove){
    //     console.log("NO WINNER");
    // }
    
    // if (playerMove==0&&computerMove==2 || 
    //     playerMove==1&&computerMove==0 || 
    //     playerMove==2&&computerMove==1){

    //         console.log("PLAYER (MEAN YOU) WIN")
    // }
    
    // if (playerMove==0&&computerMove==1 || 
    //     playerMove==1&&computerMove==2 || 
    //     playerMove==2&&computerMove==0){

    //         console.log("COMPUTER WIN")
    //     }

    switch (playerMove) {
        case 0:
            if (computerMove == 0) {
                console.log('NO WINNER');
                matchResult.textContent="NO WINNER";
                compSelect.textContent="Computer select: Rock";
            } else if (computerMove == 1) {
                console.log('COMPUTER WIN');
                matchResult.textContent="COMPUTER WIN";
                compSelect.textContent="Computer select: Paper";
                computersScore++;
            } else {
                console.log('PLAYER WIN');
                matchResult.textContent="PLAYER WIN";
                compSelect.textContent="Computer select: Scissors";
                playersScore++;
            }
            break;
        case 1:
            if (computerMove == 1) {
                console.log('NO WINNER');
                matchResult.textContent="NO WINNER";
                compSelect.textContent="Computer select: Paper";
            } else if (computerMove == 2) {
                console.log('COMPUTER WIN');
                matchResult.textContent="COMPUTER WIN";
                compSelect.textContent="Computer select: Scissors";
                computersScore++;
            } else {
                console.log('PLAYER WIN');
                matchResult.textContent="PLAYER WIN";
                compSelect.textContent="Computer select: Rock";
                playersScore++;
            }
            break;
        case 2: 
            if (computerMove == 2) {
                console.log('NO WINNER');
                matchResult.textContent="NO WINNER";
                compSelect.textContent="Computer select: Scissors";
            } else if (computerMove == 1) {
                console.log('PLAYER WIN');
                matchResult.textContent="PLAYER WIN";
                compSelect.textContent="Computer select: Paper";
                playersScore++;
            } else {
                console.log('COMPUTER WIN');
                matchResult.textContent="COMPUTER WIN";
                compSelect.textContent="Computer select: Rock";
                computersScore++;

            }
            break;
    }


    }





let rockButton= document.querySelector(".rock")
let paperButton= document.querySelector(".paper")
let scissorsButton= document.querySelector(".scissors")
let matchResult = document.querySelector(".result")
let playerSelect = document.querySelector(".playerSelect")
let compSelect = document.querySelector(".compSelect")
let playerScore = document.querySelector(".scoreP")
let compScore = document.querySelector(".scoreC")

rockButton.addEventListener("click", () =>{
    playGame(0,getComputerChoice())
    playerSelect.textContent="Player select: Rock";
   // compSelect.textContent=computerM;
   playerScore.textContent=playersScore;
   compScore.textContent=computersScore;
   controlWinner()
})
    
paperButton.addEventListener("click", () =>{
    playGame(1,getComputerChoice())
    playerSelect.textContent="Player select: Paper";
    //compSelect.textContent=computerM;
    playerScore.textContent=playersScore;
    compScore.textContent=computersScore;
    controlWinner()
})

scissorsButton.addEventListener("click", () =>{
    playGame(2,getComputerChoice())
    playerSelect.textContent="Player select: Scissors";
   // compSelect.textContent=computerM;
   playerScore.textContent=playersScore;
   compScore.textContent=computersScore;
   controlWinner()
})

function controlWinner(){
    if (playersScore==5){
        alert("PLAYER WIN THIS GAME!");
        playersScore=0;
        computersScore=0;
        playerScore.textContent=playersScore;
        compScore.textContent=computersScore;
    }else if(computersScore==5){
        alert("COMPUTER WIN THIS GAME!")
        playersScore=0;
        computersScore=0;
        playerScore.textContent=playersScore;
        compScore.textContent=computersScore;
    }
}