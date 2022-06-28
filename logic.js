function checkPassword() {
    var name =  document.getElementById("name").value;
    var password =  document.getElementById("password").value;
    if (name.toLowerCase() == "beta" && password.toLowerCase() == "july 19") 
        window.open("video.html", '_blank');
    else {
        document.getElementById("form-container").classList.add("form-input-animation");
        setTimeout(() => {
            document.getElementById("form-container").classList.remove("form-input-animation");
        }, 1000);
    }
    document.getElementById("name").value = "";
    password =  document.getElementById("password").value = "";
}

low_opacity = "brightness(20%)";
max_opacity = "brightness(100%)";

function disapeare_image(imageID, textID) {
    document.getElementById(textID).style.visibility = "visible";
    document.getElementById(imageID).style.filter = low_opacity;
}

function apeare_image(imageID, textID) {   
    setTimeout(() => {
        document.getElementById(imageID).style.filter = max_opacity;
        document.getElementById(textID).style.visibility = "hidden";
    }, 50);
    
}

function openSourceCode() {window.open("https://github.com/Nikolay1580/Anniversarry-Website"), "_blank";}
