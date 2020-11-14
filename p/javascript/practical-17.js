//Selector
const time  = document.getElementById("time");
const greeting  = document.getElementById("greeting");
const name  = document.getElementById("name");
const date  = document.getElementById("date");

// Event Handler
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

// Create Function 

function showtime(){
    let today = new Date();

    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString();

    const amPM = hour > 12 ? 'PM' : 'AM'; 

    // 12Hrs Format 
    hour = hour%12 || 12;

    //In innerHTml ,use tilde operator
    // Output time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPM}`;
    
    date.innerHTML = `${todayDate}`
    // 1000 is in millisecond(ms)
    setTimeout(showtime,1000);
}

// This function add zero in output time 
function addZero(m){
    return((parseInt(m,10) < 10?'0' : '')+m);
}
// setGreeting
function setGreeting(){
    //let today = new Date(2020, 11, 10, 19, 32, 33);
    // To check wallpaper on different time above format is used.
    let today = new Date();
    console.log(today);
    hour = today.getHours();

    if(hour < 12){
        document.body.style.backgroundImage = 'url("../image/morning.jpg")'
        greeting.innerHTML = "Good Morning" ;
    }
    else    if(hour < 18){
        document.body.style.backgroundImage = 'url("../image/evening.jpg")'
        greeting.innerHTML = "Good Afternoon" ;
    }
    else{
            document.body.style.backgroundImage = 'url("../image/night.jpg")'
            greeting.innerHTML = "Good Night" ;
        document.body.style.color = "white";
    }
}

function editName(){
    if(localStorage.getItem("mykeyname") === null){
        name.innerHTML = '[Enter Name]';
    }
    else{
        name.innerHTML = localStorage.getItem("mykeyname");
    }
}
function setName(k){
    if(k.type === "keypress"){
        if(k.keyCode == 13){ //Enter Key Press
            localStorage.setItem("mykeyname",k.target.innerHTML);
            name.blur();
        }
    }
    else{ // Blur Event
        localStorage.setItem("mykeyname",k.target.innerHTML);
    }
}

//Function Call

showtime();
setGreeting();
editName();
