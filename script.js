const stone = document.getElementById("stone");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const countWin = document.getElementById("countWin");
const countLose = document.getElementById("countLose");
const result = document.getElementById("result");
const reset = document.getElementById("resetButton");
const choiceUser = document.getElementById("choiceUser");
const choiceComputer = document.getElementById("choiceComputer");

const listData = ["Камень","Ножницы","Бумага"];
let countReset=0;

reset.addEventListener('click',()=>{
    countLoseUser=countReset;
    countWinUser=countReset;
    countLose.innerHTML=countReset;
    countWin.innerHTML=countReset;
    result.innerHTML="";
})

let countWinUser=0;
let countLoseUser=0;

let resultWin="Победа";
let resultLose="Поражение";
let resultDraw="Ничья";

let stoneComputer = "Камень";
let scissorsComputer = "Ножницы";
let paperComputer = "Бумага";


function getRandomChoise(){
    const randomElement = Math.floor(Math.random()*listData.length);
    return listData[randomElement];
}

function clickButton(element){
    const userChoice = element.value;
    const computerChoise = getRandomChoise();
    if (userChoice===computerChoise){
        result.innerHTML=resultDraw;
        choiceComputer.innerHTML=computerChoise;
        choiceUser.innerHTML=userChoice;
    }
    else if (
        (userChoice === "Камень" && computerChoise === "Ножницы") ||
        (userChoice === "Ножницы" && computerChoise === "Бумага") ||
        (userChoice === "Бумага" && computerChoise === "Камень")
      ){
        countWinUser++;
        countWin.textContent = countWinUser; 
        result.innerHTML=resultWin;
        choiceComputer.innerHTML=computerChoise;
        choiceUser.innerHTML=userChoice;
      }
    else{
        countLoseUser++;
        countLose.textContent=countLoseUser;
        result.innerHTML=resultLose;
        choiceComputer.innerHTML=computerChoise;
        choiceUser.innerHTML=userChoice;
    }

}