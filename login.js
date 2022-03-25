document.querySelector("form").addEventListener("submit",loginfunction);


var datafromsignup = JSON.parse(localStorage.getItem("signupdatas"))

var logindata = [];

function loginfunction(){
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#pwd").value;

    for(var i=0; i<datafromsignup.length; i++){
        if(datafromsignup[i].eml==email && datafromsignup[i].pwd==password){
            alert("Login Successfull");
            window.location.href="men.html";
            break;
        }
        else{
            alert("Login Failed");
        }
    }


}