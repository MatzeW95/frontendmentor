var buttonSubmit = document.getElementById("buttonSubmit");
var ratingSelection = document.getElementsByClassName("radio");
var textRating = document.getElementById("selectedRating");

var containerSelection = document.getElementById("selectionContainer");
var containerResult = document.getElementById("finalContainer");

var rating = "";

ratingSelection[0].addEventListener("click", function () {
    changeRating(0);
});

ratingSelection[1].addEventListener("click", function () {
    changeRating(1);
});

ratingSelection[2].addEventListener("click", function () {
    changeRating(2);
});

ratingSelection[3].addEventListener("click", function () {
    changeRating(3);
});

ratingSelection[4].addEventListener("click", function () {
    changeRating(4);
});

buttonSubmit.addEventListener("click", function () {

    if (rating !== "") {
        textRating.innerHTML = rating + 1;

        containerSelection.style.display = "none";
        containerResult.style.display = "block";
    }
});

function changeRating(newActive) {

    if (rating !== "") {
        ratingSelection[rating].style.backgroundColor = "hsl(213, 19%, 18%)";
        ratingSelection[rating].style.color = "hsl(216, 12%, 54%)";
    }

    ratingSelection[newActive].style.backgroundColor = "hsl(217, 12%, 63%)";
    ratingSelection[newActive].style.color = "#ffffff";

    rating = newActive;
}