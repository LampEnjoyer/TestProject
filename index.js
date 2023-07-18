let username;
let email;
let birthdate;

document.getElementById("submitButton").onclick = function(){
    username = document.getElementById("myText1").value;
    username = String(username);

    email = document.getElementById("myText2").value;
    email = String(email);

    birthdate = document.getElementById("myText3").value;
    birthdate = String(birthdate);

    console.log("Welcome", username);
}
