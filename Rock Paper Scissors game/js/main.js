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

    var computerSelection = computerPick();
    var result = checkWinCondition(userSelection, computerSelection);

    hideSelectionUI();
    showPick(userSelection, computerSelection);
    showWinner(result);
}

function computerPick() {

    var com;

    if (normalMode == true) {
        com = Math.floor(Math.random() * 3);
    }
    else {
        com = Math.floor(Math.random() * 5);
    }

    return com;
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

        if (userPick == 0 && computerPick == 2) {
            result = 1;
        }
        else if (userPick == 0 && computerPick == 4) {
            result = 1;
        }
        else if (userPick == 1 && computerPick == 0) {
            result = 1;
        }
        else if (userPick == 1 && computerPick == 3) {
            result = 1;
        }
        else if (userPick == 2 && computerPick == 1) {
            result = 1;
        }
        else if (userPick == 2 && computerPick == 3) {
            result = 1;
        }
        else if (userPick == 3 && computerPick == 0) {
            result = 1;
        }
        else if (userPick == 3 && computerPick == 4) {
            result = 1;
        }
        else if (userPick == 4 && computerPick == 1) {
            result = 1;
        }
        else if (userPick == 4 && computerPick == 2) {
            result = 1;
        }
        else if (userPick == 2 && computerPick == 0) {
            result = 2;
        }
        else if (userPick == 4 && computerPick == 0) {
            result = 2;
        }
        else if (userPick == 0 && computerPick == 1) {
            result = 2;
        }
        else if (userPick == 3 && computerPick == 1) {
            result = 2;
        }
        else if (userPick == 1 && computerPick == 2) {
            result = 2;
        }
        else if (userPick == 3 && computerPick == 2) {
            result = 2;
        }
        else if (userPick == 0 && computerPick == 3) {
            result = 2;
        }
        else if (userPick == 4 && computerPick == 3) {
            result = 2;
        }
        else if (userPick == 1 && computerPick == 4) {
            result = 2;
        }
        else if (userPick == 2 && computerPick == 4) {
            result = 2;
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
        else if (userPick == 3 && computerPick == 3) {
            result = 3;
        }
        else if (userPick == 4 && computerPick == 4) {
            result = 3;
        }
    }

    if (result != 0) {
        return result;
    }
}

//Update UI
var selectionUI = document.getElementById("gameSelection");
var resultUI = document.getElementById("gameResult");

var userPickUI = document.getElementById("finalUserPick");
var userImg = document.getElementById("imgFinalUser");
var comPickUI = document.getElementById("finalComPick");
var comImg = document.getElementById("imgFinalCom");

var outerRing = document.getElementsByClassName("resultOuterRing");
var middleRing = document.getElementsByClassName("resultMiddleRing");
var innerRing = document.getElementsByClassName("resultInnerRing");

function hideSelectionUI() {
    selectionUI.style.display = "none";
}

function showPick(user, com) {

    switch (user) {
        case 0:
            userPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)"; 
            userImg.src = "./images/icon-paper.svg";       
            break;
        case 1:
            //updated object user pick based on case
            userPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)";
            userImg.src = "./images/icon-scissors.svg";      
            break;
        case 2:
            //updated object user pick based on case
            userPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)";
            userImg.src = "./images/icon-rock.svg";     
            break;
        case 3:
            //updated object user pick based on case
            userPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)";
            userImg.src = "./images/icon-lizard.svg";  
            break;
        case 4:
            //updated object user pick based on case
            userPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)";
            userImg.src = "./images/icon-spock.svg";     
            break;
    }

    switch (com) {
        case 0:
            //updated object com pick based on case
            comPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(230, 89%, 62%) 0%, hsl(230, 89%, 65%) 100%)";
            comImg.src = "./images/icon-paper.svg";   
            break;
        case 1:
            //updated object com pick based on case
            comPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(39, 89%, 49%) 0%, hsl(40, 84%, 53%) 100%)";
            comImg.src = "./images/icon-scissors.svg";       
            break;
        case 2:
            //updated object com pick based on case
            comPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(349, 71%, 52%) 0%, hsl(349, 70%, 56%) 100%)";
            comImg.src = "./images/icon-rock.svg";      
            break;
        case 3:
            //updated object com pick based on case
            comPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(261, 73%, 60%) 0%, hsl(261, 72%, 63%) 100%)";
            comImg.src = "./images/icon-lizard.svg"; 
            break;
        case 4:
            //updated object com pick based on case
            comPickUI.style.backgroundImage = "linear-gradient(0deg, hsl(189, 59%, 53%) 0%, hsl(189, 58%, 57%) 100%)";
            comImg.src = "./images/icon-spock.svg"; 
            break;
    }

    //display object user and com pick
    
    resultUI.style.display = "block";
}

function showWinner(result) {

    //result: 1 user win, 2 computer win, 3 draw
    
    switch (result) {
        case 1:
            //only show user background
            outerRing[0].style.visibility = "visible";
            middleRing[0].style.visibility = "visible";
            innerRing[0].style.visibility = "visible";

            comPickUI.style.visibility = "visible";
            break;
        case 2:
            //only show com background
            outerRing[1].style.visibility = "visible";
            middleRing[1].style.visibility = "visible";
            innerRing[1].style.visibility = "visible";

            userPickUI.style.visibility = "visible";
            break;
        case 3:
            //show both background
            outerRing[0].style.visibility = "visible";
            middleRing[0].style.visibility = "visible";
            innerRing[0].style.visibility = "visible";
            outerRing[1].style.visibility = "visible";
            middleRing[1].style.visibility = "visible";
            innerRing[1].style.visibility = "visible";
            break;
    }
}