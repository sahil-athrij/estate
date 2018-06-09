
var database = firebase.database();

function writeUserData(aadhar,name,telephone,password) {
    firebase.database().ref('users/'+aadhar).set({
        aadhar: aadhar,
        name:name,
        phone:telephone,
        password:password
    });
}

function createuser(email,password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);


        // ...
    });
}
function writedata() {
    var aadhar = document.getElementById("aadhar").value;
    var name = document.getElementById("name").value;
    var telephone = document.getElementById("telephone").value;
    var pass = document.getElementById("passwordr").value;


    var email = document.getElementById("emailr").value;
    createuser(email,pass);
    writeUserData(aadhar,name,telephone,pass);


}






