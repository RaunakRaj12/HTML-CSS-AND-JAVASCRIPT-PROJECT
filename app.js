// Now it's time for the Js part where we are going to have logical part for the this Rock , Paper and Scissor game 
// first we have two variable which are going to count the score for user and computer

let userScore = 0;
let compScore = 0; 

// here getting the choices in javascript 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#computer_score");

// it's time for the computer choice
const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = " Game was Draw . Play Again ";
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = " you win!";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = " you lose";
    }
};

const playGame = (userChoice) => {
    console.log("user choice",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice){
        // game draw 
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper , scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // computer choose rock , scissor 
           userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // user has scissor 
            // comp has rock , paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
};


// This is for the user choice

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice=choice.getAttribute("id")
        //console.log("choice is clicked",userChoice); 
        playGame(userChoice);
    });
});



