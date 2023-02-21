let username=document.getElementById("inp");

let pasword=document.getElementById('pwd')

let submitbtn=document.getElementById('submitbtn');
let intro=document.createElement('h1').vlaue='Enter user id and Pasword';
body.append(intro);
function validation(){
if(username.value !="" && pasword.value !=""){
    alert("Your detailes saved sucessfully");
             }
else{
    alert("please enter your data");    }
}

// document.addEventListener(onclick,validation());
submitbtn.onclick=validation;
