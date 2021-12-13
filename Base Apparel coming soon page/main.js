let button = document.getElementById("a-button");
let input = document.getElementById("input-email");
let error = document.getElementById("p-error");

button.addEventListener("click", () => {

    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let str = input.value;

    if(regex.test(str)) {
        console.log("Your email is valid!");

        window.location.replace("");
    }
    else {
        error.style.visibility = "visible";
        input.style.border = "solid 2px hsl(0, 93%, 68%)";
        input.style.backgroundSize = "25px 25px";

        console.log("Your email is invalid!");
    }
});