let username=document.getElementById("inp");

let pasword=document.getElementById('pwd')

let submitbtn=document.getElementById('submitbtn');

function validation(){
if(username.value !="" && pasword.value !=""){
    alert("Your detailes saved sucessfully");
             }
else{
    alert("please enter your data");    }
}

// document.addEventListener(onclick,validation());
submitbtn.onclick=validation;