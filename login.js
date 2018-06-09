
function readuserdata(email,password) {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });
}


function readdata() {
    var pass = document.getElementById("password").value;

    var email = document.getElementById("email").value;
    readuserdata(email,pass);



}