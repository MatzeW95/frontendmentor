var inputBill = document.getElementById("inputBill");
var inputTip = document.getElementById("inputTip");
var inputPeople = document.getElementById("inputPeople");

var tip = document.getElementById("dollarTip");
var total = document.getElementById("dollarTotal");

var reset = document.getElementById("buttonReset");

document.getElementById("btn5").addEventListener("click", refreshPrice);
document.getElementById("btn10").addEventListener("click", refreshPrice);
document.getElementById("btn15").addEventListener("click", refreshPrice);
document.getElementById("btn25").addEventListener("click", refreshPrice);
document.getElementById("btn50").addEventListener("click", refreshPrice);

inputTip.addEventListener("input", refreshPrice);

reset.addEventListener("click", resetAll);

function refreshPrice() {
    tip.textContent = getTip();
    total.textContent = getTotal();

    resetBackgroundColor(getTip);
}

function getTip() {
    var tipAmount = ((inputBill.value * inputTip.value) / 100) / inputPeople.value;
    
    return tipAmount;
}

function getTotal() {
    var totalAmount = inputBill.value / inputPeople.value + getTip();

    return totalAmount;
}

function resetAll() {
    inputBill.value = "";
    inputTip.value = "";
    inputPeople.value = "";

    tip.textContent = "0.00";
    total.textContent = "0.00";

    reset.style.backgroundColor = "rgb(0, 107, 111)";
}

function resetBackgroundColor (tip) {
    
    if (this == "0.00") {
        reset.style.backgroundColor = "rgb(0, 107, 111)";
    }
    else {
        reset.style.backgroundColor = "rgb(133, 236, 225)";
    }
}