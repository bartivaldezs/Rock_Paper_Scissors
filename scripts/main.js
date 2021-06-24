function playRound(playerSelection,computerSelection){
    let playerSelectionCopy= playerSelection.toLowerCase();
    switch(computerSelection){
        case "paper":
            switch(playerSelectionCopy){
                case "rock":
                    return "lose";
                case "paper":
                    return "tie";
                case "scissors":
                    return "won";
            }
        case "rock":
            switch(playerSelectionCopy){
                case "rock":
                    return "tie";
                case "paper":
                    return "won";
                case "scissors":
                    return "lose";}
        case "scissors":
            switch(playerSelectionCopy){
                case "rock":
                    return "won";
                case "paper":
                    return "lose";
                case "scissors":
                    return "tie";}
            
    }
}
function computerPlay(){
    let numberChoice=Math.floor(Math.random()*3);
    switch(numberChoice){
        case 0:
            return "rock";
            
        case 1:
            return "paper";
            
        case 2:
            return "scissors" ;
    }
}



function userSelection(e){
    let humanChoice=e.target.id; 
    let computerChoice=computerPlay();
    let matchResult= playRound(humanChoice,computerChoice);

    updateLastChoice('#computerLast .lastChoice',computerChoice);
    
    updateLastChoice('#humanLast .lastChoice',humanChoice);
    
    scoreKeeping(matchResult);
    

    
}

function updateLastChoice(selector,choice){
    const LastChoice=document.querySelector(selector)
    
    switch(choice){
        case "rock":
            LastChoice.src="images/rock.png";
            break;
        case "paper":
            LastChoice.src="images/paper.png";
            break;
        case "scissors":
            LastChoice.src="images/scissors.png";
            break;
    }
}
function scoreKeeping(matchResult){
    const computerScore= document.querySelector("#computerScore");
    const humanScore=document.querySelector("#humanScore");
    let acualComputerScore,actualHumanScore; 
    switch(matchResult){
        case "won":
            humanScore.textContent=Number(humanScore.textContent)+1;
            break;
        case "lose":
            computerScore.textContent=Number(computerScore.textContent)+1;
            break;
        case "tie":
            break;
    }
    acualComputerScore=Number(computerScore.textContent);
    actualHumanScore=Number(humanScore.textContent);
    if( acualComputerScore + actualHumanScore > 5){
        if(acualComputerScore > actualHumanScore){
            window.alert("you won");
        }
        else{
            window.alert("you lose")
        }
        humanScore.textContent=0;
        computerScore.textContent=0;
    }
}

const buttons=document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', userSelection));
