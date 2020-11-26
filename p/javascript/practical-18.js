// Selectors
const form  = document.getElementById('form');
const username  = document.getElementById('username');
const email  = document.getElementById('email');
const pass1  = document.getElementById('pass1');
const pass2  = document.getElementById('pass2');
const small  = document.getElementById('small');
const submit  = document.getElementById('submit');

// Event Handler
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
})



// Functions
function checkInput(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const pass1Value = pass1.value;
    const pass2Value = pass2.value;

    if(usernameValue === '' ){
        showError(username,"Username can not be blank");
    }
    else{
        // showSuccess(username);
        // CHeck Username Regex
        
        let rel = /^[^0-9 (^A-Z) (^+-_!@#$%^&*., ?) (^"")]+[a-z]*$/g
        if(true === rel.test(usernameValue)){
            showSuccess(username);
        }
        else{
            showMsgU(username,"Username must be in smallcase with no special Symbols and spaces")
        }

    }
    if(emailValue === '' ){
        showError(email,"Email can not be blank");
    }
    else{
        // showSuccess(email);
        //  CHeck Email Regex
        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z](?:[a-z]{0,30}[a-z])?(?:\.[a-z](?:[a-z]{0,30}[a-z])?)*$/g
        if(true === re.test(emailValue)){
            showSuccess(email);
        }
        else{
            showMsg(email,"Email must be in this format:username@domain.com")
        }

    }
    if(pass1Value === '' ){
        showError(pass1,"Password can not be blank");
    }
    else{
        showSuccess(pass1);
    }
    if(pass2Value === '' ){
        showError(pass2,"Password can not be blank");
    }
    else{
        showSuccess(pass2);
    }

}
function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className = "form-cont error";
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input,msg){
    const formControl = input.parentNode;
    formControl.className = "form-cont success";
}
function showMsg(input,msg){
    const formControl = input.parentNode;
    formControl.className = "form-cont msg";
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}
function showMsgU(input,msg){
    const formControl = input.parentNode;
    formControl.className = "form-cont msgu";
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}