// Computer Choice
let computerPlay = (result) => {
    let choose = Math.floor(Math.random()*3);
    if (choose == 0) {
         return result = "rock";
    } else if (choose == 1) {
         return result = "scissors";
    } else {
         return result = "paper";
}};

//Player Choice
let playerPlay = (result) => {
    let choose = window.prompt("Choose your play");
    return result = choose.toLowerCase();
};

//Deciding the winner
let playRound = (playerSelec, computerSelec) => {
    let result;
if (playerSelec == "rock" && computerSelec == "scissors") {
    return result = "You win, ROCK beats SCISSORS";
} else if (playerSelec == "rock" && computerSelec == "paper") {
    return result = "You loose, PAPER beat ROCK";
} else if (playerSelec == "rock" && computerSelec == "rock") {
    return result = "Tie!";
}else if (playerSelec == "scissors" && computerSelec == "paper") {
    return result = "You win, SCISSORS beats PAPER"
} else if (playerSelec == "scissors" && computerSelec == "rock") {
    return result = "You loose, ROCK beat SCISSORS";
} else if (playerSelec == "scissors" && computerSelec == "scissors") {
    return result = "Tie!";
} else if (playerSelec == "paper" && computerSelec == "rock") {
    return result = "You win, PAPER beats ROCK";
} else if (playerSelec == "paper" && computerSelec == "scissors") {
    return result = "You loose, SCISSORS beat PAPER";
} else if (playerSelec == "paper" && computerSelec == "paper") {
    return result = "Tie!";
}
};

let game = () => {
    for (let i = 0; i < 5; i++) {
    console.log(playRound(playerPlay(),computerPlay()));
    };
};

game();