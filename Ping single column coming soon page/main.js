let button = document.getElementById("a-notify");
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
        input.style.border = "solid 1px hsl(354, 100%, 66%)";

        console.log("Your email is invalid!");
    }
});