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
  toDos = toDos.filter(
    (item) => parseInt(li.id) !== item.id //string으로 저장된 id Number 변환 필수
  );
  saveTodos();
}
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "삭제";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  span.innerText = newTodoObj.text;
  toDoList.appendChild(li);

  deleteBtn.addEventListener("click", handleToDelete);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
showTodos();

const $elems = document.getElementsByTagName("li");
[...$elems].forEach((elem) => (elem.style.color = "red"));
