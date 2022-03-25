document.querySelector("#form").addEventListener("submit",signupdetails);

var signupdata = JSON.parse(localStorage.getItem("signupdatas"))||[];
function signupdetails(){
event.preventDefault();

var name = document.querySelector("#name").value;
var email = document.querySelector("#email").value;
var password = document.querySelector("#pwd").value;

var objsignup = {
    naam:name,
    eml:email,
    pwd:password,
}

signupdata.push(objsignup);

localStorage.setItem("signupdatas",JSON.stringify(signupdata));

document.querySelector("#name").value="";
document.querySelector("#email").value="";
document.querySelector("#pwd").value="";

}