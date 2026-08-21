function getComputerChoice()
{
    let draw = Math.random();
    if (draw < 0.33)
        return 'rock';
    else if (draw < 0.66)
        return 'paper';
    else
        return 'scissors';
} 

function getHumanChoice()
{
    let response = prompt("Enter option");
    return response;
}

function playRound(humanChoice, computerChoice)
{
    humanChoice = humanChoice.toLowerCase();
    let result = 0; 

    console.log(humanChoice, computerChoice);

    if (humanChoice == computerChoice)
        result = 0;
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') 
        || (humanChoice == 'paper' && computerChoice == 'rock') 
        || (humanChoice == 'scissors' && computerChoice == 'paper'))
        result = 1;
    else
        result = -1; 
    
    switch (result)
    {
        case 1:
            console.log("You win this round");
            break;
        case 0:
            console.log("It's a draw");
            break;
        case -1:
            console.log("You lose this round");
            break;
    }

    return result;
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;
    let curr_result;
    for (let i = 0; i < 5; i++)
    {
        curr_result = playRound(getHumanChoice(), getComputerChoice());
        switch (curr_result)
        {
            case 1:
                humanScore = humanScore + 1;
                break;
            case -1:
                computerScore = computerScore + 1;
                break;
        }
    }
    console.log("Final tally. Human " + humanScore + " Computer " + computerScore);
}

playGame();