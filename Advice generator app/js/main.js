window.addEventListener("load", function () {
    getRandomQuote();
});

document.getElementsByClassName("circle")[0].addEventListener("click", function() {
   getRandomQuote(); 
});

function getRandomQuote() {
    
    var url = "https://api.adviceslip.com/advice";

    fetch(url, {
        method: "get"
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        var data = JSON.parse(text);
        document.getElementsByClassName("advice")[0].innerHTML = "Advice #" + data.slip.id;
        document.getElementsByClassName("quote")[0].innerHTML = data.slip.advice;
    }).catch(function (error) {
        console.error(error);
    });
}