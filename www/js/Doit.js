// Select the Elements
// const clear = document.querySelector(".clear");
// const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const sets = document.getElementById("sets");

// Classes names
const CHECK = "red";
const UNCHECK = "greenbtn";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
}else{
    // if data isn't empty
    LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.set, item.id, item.done, item.trash);
    });
}

// clear the local storage
// clear.addEventListener("click", function(){
//     localStorage.clear();
//     location.reload();
// });

// Show todays date
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

// dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function

function addToDo(toDo, aantalSet, id, done, trash){

    if(trash){ return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item yellowbakground">
                    <i class="material-icons de" job="delete" id="${id}">delete_forever</i>
                    <i class="material-icons co" job="complete" id="${id}">fiber_manual_record</i>
                    <p class="text ${LINE}">${toDo}<br>aantal set: ${aantalSet}</p>
                  </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// add an item to the list user the enter key
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        const aantalSet = sets.value;

        // if the input isn't empty
        if(toDo){
            addToDo(toDo, aantalSet, id, false, false);

            LIST.push({
                name : toDo,
                set : aantalSet,
                id : id,
                done : false,
                trash : false
            });

            // add item to localstorage ( this code must be added where the LIST array is updated)
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});


// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete

    if(elementJob == "complete"){
        completeToDo(element);
    }else if(elementJob == "delete"){
        removeToDo(element);
    }

    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});





