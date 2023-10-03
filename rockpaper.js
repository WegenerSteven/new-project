const readLine = require("readline");
//it calls readline function which reads user input
const computerChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
//Genearates random choices for the computer
function playGame() {
    const r1 = readLine.createInterface({
        Input: process.stdin, output: process.stdout
        //calls the interface to read the user input and computer output
    })
}
//creates a function which is used to play the game
r1.question("Enter your Choice: rock, paper, scissors");
(playerchoice) => {
    r1.close();//closes user interface
    if (!playerchoice || !["rock", "paper", "scissors"].includes(playerchoice)) {
        console.log("Invalid choice please try again");
        return
    }
}
let response;
if (playerchoice === computerChoice) {
    response = "It is a Tie"
}
else if ((playerchoice === "rock" && computerChoice === "scissors") || (playerchoice === "paper" && computerChoice === "rock")
    || (playerchoice === "scissors" && computerChoice === "paper")) {
    response = "It is a win"
}
else {
    response = "Computer wins"

    console.log(`computerChoice is ${computerChoice}`)
    console.log(response)
}

playGame()