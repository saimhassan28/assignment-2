//get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//validate data
function validateForm(){

    clearMessages();
let errorFlag=false;

if(nameInput.value.length<1){
    errorNodes[0].innerText= "Name Cannot Be Blank";
    nameInput.classList.add("error-border"); 
    errorFlag=true;
}

if(!emailIsValid(email.value)){
    errorNodes[1].innerText= "Invalid Email Address";
    nameInput.classList.add("error-border"); 
    errorFlag=true;
}

if(message.value.length<1){
    errorNodes[2].innerText= "Please Enter Message";
    message.classList.add("error-border"); 
    errorFlag=true;
}

if(!errorFlag){
    success.innerText="Success!";
}
}

//clear error
function clearMessages(){
    for(let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText='';
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border")
    message.classList.remove("error-border");
}

//check email
function emailIsValid(email){
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}