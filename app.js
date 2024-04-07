const newTodo = document.querySelector('#newTodo');
const todoList = document.querySelector('.todoList');
let completeList = document.querySelector('.done');
const taskInput = document.querySelector('#addTodo');
let storedTodos = [];
let storedComplete = [];

let getTodos = (JSON.parse(localStorage.getItem("storedList")));
let getDones = (JSON.parse(localStorage.getItem("storedDones")));

if (getTodos !== null){
    for (let retrieved of getTodos){
    storedTodos.push(retrieved);
    }
}

if (getDones !== null){
    for (let done of getDones){
    storedComplete.push(done);
}
}

for (let storedTodo of storedTodos){
    let storedTask = document.createElement("li");
    storedTask.innerHTML = storedTodo;
    todoList.appendChild(storedTask);
}

for (let storedDone of storedComplete){
    let storedDoneTask = document.createElement("li");
    storedDoneTask.innerHTML = storedDone;
    completeList.appendChild(storedDoneTask);
    }

    for (box of document.querySelectorAll(".checked")){
        box.checked=true;
    }    

todoList.addEventListener("click", function(e){
   if (e.target.checked === true){
    for (let item of storedTodos){
        if (storedTodos.includes(e.target.parentElement.innerHTML)){
            storedTodos.splice(storedTodos.indexOf[item], 1);
            localStorage.removeItem("storedList");
            localStorage.setItem("storedList", JSON.stringify(storedTodos));
        }
    }
    newDone = document.createElement('li');
    newDone.innerHTML = e.target.parentElement.innerHTML;
    newDone.classList.add("complete");
    e.target.parentElement.remove();
    completeList.appendChild(newDone);
    document.querySelector('.complete > input[type="checkbox"]').checked=true;
    document.querySelector('.complete > input[type="checkbox"]').classList.add("checked");
    storedComplete.push(newDone.innerHTML);
    localStorage.setItem("storedDones", JSON.stringify(storedComplete));
    //old code:
    // e.target.parentElement.className = "clicked";
    // e.target.classList.add("checked")
   }
//    else {
//     e.target.parentElement.className = '';
//     e.target.classList.remove("checked");
//    }
})


todoList.addEventListener("click", function(e){
   if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
        for (let todo of storedTodos){
            if (storedTodos.includes(e.target.parentElement.innerHTML)){
            storedTodos.splice(storedTodos.indexOf[todo], 1)
            localStorage.removeItem("storedList");
            localStorage.removeItem("storedDones");
            localStorage.setItem("storedList", JSON.stringify(storedTodos));
            localStorage.setItem("storedDones", JSON.stringify(storedComplete));
            }
        }
    }   
})

completeList.addEventListener("click", function(e){
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        for (let deleted of storedComplete){
            if (storedComplete.includes(e.target.parentElement.innerHTML)){
                storedComplete.splice(storedComplete.indexOf[deleted], 1);
                localStorage.removeItem("storedDones");
                localStorage.removeItem("storedList");
                localStorage.setItem("storedDones", JSON.stringify(storedComplete));
                localStorage.setItem("storedList", JSON.stringify(storedTodos));
            }
        }
    }
})

completeList.addEventListener("click", function(e){
    if (e.target.checked === false){
        for (let undo of storedComplete){
            if (storedComplete.includes(e.target.parentElement.innerHTML)){
                storedComplete.splice(storedComplete.indexOf[undo], 1);
                localStorage.removeItem("storedDones");
                localStorage.setItem("storedDones", JSON.stringify(storedComplete));
            }
        }
        undoDone = document.createElement('li');
        undoDone.innerHTML = e.target.parentElement.innerHTML;
        undoDone.classList.remove("complete");
        undoDone.firstElementChild.classList.remove("checked");
        e.target.parentElement.remove();
        todoList.appendChild(undoDone);
        storedTodos.push(undoDone.innerHTML);
        localStorage.setItem("storedList", JSON.stringify(storedTodos));
    }
})

newTodo.addEventListener("submit", function(e){
    e.preventDefault();
    const newTask = document.createElement('li');
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox"
    newTask.appendChild(newCheckbox);
    let newTaskText = document.createTextNode(taskInput.value += ' ');
    newTask.appendChild(newTaskText);
    taskInput.value = '';
    const newRemoveBtn = document.createElement("button");
    newTask.appendChild(newRemoveBtn);
    newRemoveBtn.innerText = 'x';
    newRemoveBtn.className = "remove";
    todoList.appendChild(newTask);
    storedTodos.push(newTask.innerHTML);
    localStorage.setItem("storedList", JSON.stringify(storedTodos));
})