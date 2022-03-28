var rules = document.getElementById("rules");
var rulesPopup = document.getElementById("rulesPopup");
var closeRules = document.getElementById("imgClose");
var imgRules = document.getElementById("imgRules");

var mode = document.getElementById("mode");
var imgHeader = document.getElementById("imgLogo");
var imgChoose = document.getElementById("imgChoose");

var scoreText = document.getElementById("score");

var paper = document.getElementById("selectPaper");
var scissor = document.getElementById("selectScissor");
var rock = document.getElementById("selectRock");
var lizard = document.getElementById("selectLizard");
var spock = document.getElementById("selectSpock");

var normalMode = true;
var score = 0;

//Rules popup
rules.addEventListener("click", function(){

    if(normalMode == true) {
        imgRules.src = "./images/image-rules.svg";
    }
    else {
        imgRules.src = "./images/image-rules-bonus.svg";
    }

    rulesPopup.style.display = "flex";
});

closeRules.addEventListener("click", function(){

    rulesPopup.style.display = "none";
});

//Mode change
mode.addEventListener("click", function(){

    if (normalMode == true) {
        //bonus mode
        imgHeader.src = "./images/logo-bonus.svg";
        imgChoose.src = "./images/bg-pentagon.svg";
        normalMode = false;
    }
    else {
        //normal mode
        imgHeader.src = "./images/logo.svg";
        imgChoose.src = "./images/bg-triangle.svg";
        normalMode = true;
    }
});

//Change score
function updateScoreUI() {
    scoreText.innerHTML = score;
}

function addScore(plusNumber) {
    score = score + plusNumber;
    updateScoreUI();
}

function resetScore() {
    score = 0;
    updateScoreUI();
}

//Game mechanic
paper.addEventListener("click", function(){
    userSelection(0);
});

scissor.addEventListener("click", function(){
    userSelection(1);
});

rock.addEventListener("click", function(){
    userSelection(2);
});

lizard.addEventListener("click", function(){
    userSelection(3);
});

spock.addEventListener("click", function(){
    userSelection(4);
});

function userSelection(userSelection) {
    checkWinCondition(userSelection, computerPick());
}

function computerPick() {

    return Math.floor(Math.random() * 5);
}

function checkWinCondition(userPick, computerPick) {
    
    //picks: 0 paper, 1 scissor, 2 rock, 3 lizard, 4 spock
    //result: 0 standard, 1 user win, 2 computer win, 3 draw

    var result = 0;

    if (normalMode == true) {
        //normal mode

        if (userPick == 0 && computerPick == 2) {
            result = 1;
        }
        else if (userPick == 1 && computerPick == 0) {
            result = 1;
        }
        else if (userPick == 2 && computerPick == 1) {
            result = 1;
        }
        else if (userPick == 2 && computerPick == 0) {
            result = 2;
        }
        else if (userPick == 0 && computerPick == 1) {
            result = 2;
        }
        else if (userPick == 1 && computerPick == 2) {
            result = 2
        }
        else if (userPick == 0 && computerPick == 0) {
            result = 3;
        }
        else if (userPick == 1 && computerPick == 1) {
            result = 3;
        }
        else if (userPick == 2 && computerPick == 2) {
            result = 3;
        }
    }
    else {
        //bonus mode
        
    }

    if (result != 0) {
        return result;
    }
}