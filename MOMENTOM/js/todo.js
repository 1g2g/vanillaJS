const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function showTodos() {
  let parsedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  if (parsedTodos)
    parsedTodos.forEach((element) => {
      paintToDo(element);
    });
}
function handleToDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(event.target.parentNode);
}
function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "삭제";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  span.innerText = newTodo;
  toDoList.appendChild(li);

  deleteBtn.addEventListener("click", handleToDelete);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
showTodos();
