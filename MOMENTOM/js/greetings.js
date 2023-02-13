const loginForm = document.getElementById("login-form");
//auerySelector는 className tagname 모두 가능
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden"; //자주 사용하는 classname은 대문자로 저장
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault(); //submit시 기본동작되는 새로고침 막기
  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME); //class 추가

  localStorage.setItem(USERNAME_KEY, username);

  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); //class 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //   greeting.classList.add(HIDDEN_CLASSNAME);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
