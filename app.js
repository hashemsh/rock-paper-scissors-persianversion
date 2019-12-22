let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score_board");
const result_p = document.querySelector("result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompuetrChoice(){
    const choices = ['r','p','s'];
    const randomNum = Math.floor(Math.random()*3);
    return choices[randomNum];
}
function game(userChoice){
    const compChoice = getCompuetrChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("user win ");
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log("user lose ");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("it's draw ");
            break;    
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}
main();