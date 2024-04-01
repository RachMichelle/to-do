const newTodo = document.querySelector('#newTodo');
const todoList = document.querySelector('.todoList');
const taskInput = document.querySelector('#addTodo');
let storedTodos = [];

let getTodos = (JSON.parse(localStorage.getItem("storedList")));

for (retrieved of getTodos){
    storedTodos.push(retrieved);
}

for (let storedTodo of storedTodos){
    let storedTask = document.createElement("li");
    storedTask.innerHTML = storedTodo;
    todoList.appendChild(storedTask);
}

todoList.addEventListener("click", function(e){
   if (e.target.checked === true){
    e.target.parentElement.className = "clicked";
   }
   else {
    e.target.parentElement.className = '';
   }
})

todoList.addEventListener("click", function(e){
   if (e.target.tagName === "BUTTON"){
    e.target.parentElement.remove();
        for (let todo of storedTodos){
            if (storedTodos.includes(e.target.parentElement.innerHTML)){
            storedTodos.splice(storedTodos.indexOf[todo], 1)
            localStorage.clear();
            localStorage.setItem("storedList", JSON.stringify(storedTodos));
            }
        }
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