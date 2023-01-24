// rock - 0 paper - 1 scissors - 2
alert("Rock-Paper-Scissors")

let pcMoves = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * (2 - 0 + 1) + 0)
}


let playerM = prompt("Please enter your move");
let computerM = getComputerChoice;


if (playerM=="rock") {
        playerM=0;
} else if (playerM="paper"){
        playerM=1;
}else{
        playerM=2;
}




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
            } else if (computerMove == 1) {
                console.log('COMPUTER WIN');
            } else {
                console.log('PLAYER WIN');
            }
            break;
        case 1:
            if (computerMove == 1) {
                console.log('NO WINNER');
            } else if (computerMove == 2) {
                console.log('COMPUTER WIN');
            } else {
                console.log('PLAYER WIN');
            }
            break;
        case 2: 
            if (computerMove == 2) {
                console.log('NO WINNER');
            } else if (computerMove == 1) {
                console.log('PLAYER WIN');
            } else {
                console.log('COMPUTER WIN');
            }
            break;
    }


    }





// for (let i=0;i<5;i++){
//     playGame(playerM,computerM);
//     console.log("round= "+ i)
// }



playGame(playerM,computerM)

    

