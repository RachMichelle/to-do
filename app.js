const newTodo = document.querySelector('#newTodo');
const todoList = document.querySelector('.todoList');
const taskInput = document.querySelector('#addTodo');

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
    e.target.parentElement.remove();}
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
})