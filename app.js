const newTodo = document.querySelector('#newTodo');
const todoList = document.querySelector('.todoList');

todoList.addEventListener("click", function(e){
   if (e.target.checked === true){
    e.target.parentElement.className = "clicked";
   }
   else {
    e.target.parentElement.className = '';
   }
})

newTodo.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log("you added a task");
})