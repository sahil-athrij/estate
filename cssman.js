var toggle = "yes";
function toggler() {
    if(toggle === "yes"){
        document.getElementById("register").setAttribute("style","display:none")
        document.getElementById("login").setAttribute("style","display:block")
        toggle= "no";

    }

    else{
        document.getElementById("register").setAttribute("style","display:block")
        document.getElementById("login").setAttribute("style","display:none")
        toggle= "yes";
    }
}