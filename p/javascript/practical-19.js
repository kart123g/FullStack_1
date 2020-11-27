// Selectors
const create = document.getElementById('create');
const social = document.getElementById('social');
const personal = document.getElementById('personal');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back1 = document.getElementById('back1');
const back2 = document.getElementById('back2');
const submit = document.getElementById('submit');

const progress  = document.getElementById('progress');

//  Event Handler
next1.onclick = function(){
    create.style.left = "-450px";
    social.style.left = "40px";
    progress.style.width = "240px";
}

next2.onclick = function(){
    // create.style.left = "-450px"
    social.style.left = "-450px";
    personal.style.left = "40px";
    progress.style.width = "360px"
}
back1.onclick = function(){
    create.style.left = "40px";
    social.style.left = "450px";
    personal.style.left = "450px";
    progress.style.width = "120px"
}
back2.onclick = function(){
    // create.style.left = "-450px"
    social.style.left = "40px";
    personal.style.left = "450px";
    progress.style.width = "240px"
}
//  Function 

//  Function Call