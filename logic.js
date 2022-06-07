function checkPassword() {
    var name =  document.getElementById("name").value;
    var password =  document.getElementById("password").value;
    console.log(name.value="");
    if (name.toLowerCase() == "beta" && password.toLowerCase() == "nik") {
        window.open("video.html", '_blank');
        
    } else {
        document.getElementById("form-container").classList.add("form-input-animation");
        setTimeout(() => {
            document.getElementById("form-container").classList.remove("form-input-animation");
        }, 1000);
    }
    document.getElementById("name").value = "";
    password =  document.getElementById("password").value = "";
}

