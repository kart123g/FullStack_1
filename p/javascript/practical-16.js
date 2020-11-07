//Selector
var  toInput = document.querySelector(".to-do-input");
var toButton = document.querySelector(".to-do-button");
var toList = document.querySelector(".to-do-list");


// Event Handler

toButton.onclick = createDiv;
toList.onclick = checkdel;

// Create Function

function createDiv(k){
    k.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("list-div");

    var newList = document.createElement("li");
    newList.classList.add("new-list");
    newList.innerHTML = toInput.value;
    newDiv.appendChild(newList);

    var checkBtn = document.createElement("button");
    checkBtn.classList.add("check-btn");
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(checkBtn);

    var trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(trashBtn);

    toList.appendChild(newDiv);

}
function checkdel(k){
    var item = k.target;
    if(item.classList[0] === "trash-btn"){
        // var parent = item.parentNode;
        // parent.remove();
        item.parentNode.remove();
    }
    if(item.classList[0] === "check-btn"){
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}


// Function Call