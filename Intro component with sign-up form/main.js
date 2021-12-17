let firstName = document.getElementById("input-firstName");
let lastName = document.getElementById("input-lastName");
let email = document.getElementById("input-email");
let password = document.getElementById("input-password");
let input = document.getElementsByClassName("input-form");
let error = document.getElementsByClassName("p-error");
let claim = document.getElementById("a-claim");

claim.addEventListener("click", () => {

    let regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    let str = email.value;
    let errorCounter = 0;

    if(regex.test(str)) {

        email.style.color = "Black";
        error[2].style.visibility = "hidden";
        error[2].style.margin = "0";
        input[2].style.backgroundSize = "0";

        console.log("Your email is valid!");
    }
    else {
        email.style.color = "hsl(0, 100%, 74%)";
        error[2].style.visibility = "visible";
        error[2].style.margin = "0 0 1rem";
        input[2].style.backgroundSize = "25px 25px";
        
        errorCounter++;

        console.log("Your email is invalid!");
    }

    for (var x = 0; x < input.length; x++) {
        
        if (input[x].value == null || input[x].value == "") {

            error[x].style.visibility = "visible";
            error[x].style.margin = "0 0 1rem";

            input[x].style.backgroundSize = "25px 25px";

            errorCounter++;

            console.log("Input[" + x + "] is empty!");
        }
        else {
            error[x].style.visibility = "hidden";
            error[x].style.margin = "0";

            input[x].style.backgroundSize = "0"; 
        }
    }
    
    if (errorCounter == 0) {
        window.location.replace("");
    }
});