let image = document.getElementById("shareId");
var counter = 0;

image.addEventListener("click", () => {

    if (document.documentElement.clientWidth > 899) {
        
        popupDesktop();
    }
    else {

        if (counter == 0) {
            popupMobileOn();
            counter = 1;
        }
        else {
            popupMobileOff();
            counter = 0;
        }
    }
});

function popupDesktop() {
    var popup = document.getElementById("popup");
    
    popup.classList.toggle("show");
  }

function popupMobileOn() {
    var popup = document.getElementById("popup");
    var background = document.getElementById("container-bottom");
    var left = document.getElementById("container-left");
    var middle = document.getElementById("container-middle");
    
    popup.classList.toggle("show");
    background.style.backgroundColor = "hsl(217, 19%, 35%)";
    left.style.visibility = "hidden";
    middle.style.visibility = "hidden";
}

function popupMobileOff() {
    var popup = document.getElementById("popup");
    var background = document.getElementById("container-bottom");
    var left = document.getElementById("container-left");
    var middle = document.getElementById("container-middle");
    
    popup.classList.toggle("show");
    background.style.backgroundColor = "white";
    left.style.visibility = "visible";
    middle.style.visibility = "visible";
}