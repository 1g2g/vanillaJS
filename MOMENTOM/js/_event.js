const $eventArea = document.getElementById("event");
const $DOM = document.getElementById("_DOM");
const $span = document.querySelector("#_DOM>span");
function sayHi(user) {
  alert(`hi, ${user}`);
}
const $secondBtn = document.querySelector("button:nth-child(2)");
console.log($secondBtn);
$secondBtn.addEventListener("click", function () {
  alert("thanks for clicking me");
});
const btnList = [...document.querySelector("#event>div").children];
btnList.forEach((btn) => {
  btn.addEventListener("mouseleave", function () {
    btn.style.backgroundColor = "red";
  });
  btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "white";
  });
});

//이벤트 객체
const $firstname = document.getElementById("firstname");
const $title = document.querySelector(".header");

$firstname.addEventListener("click", () => {
  const FIRSTNAME = prompt("Enter your firstname");
  $title.textContent = `Hello, ${FIRSTNAME}`;
  $DOM.insertBefore($title, $span);
  localStorage.setItem("firstname", FIRSTNAME);
});
const setName = () => {
  const FIRSTNAME = localStorage.getItem("firstname");
  $title.textContent =
    FIRSTNAME === null ? "Hello,anonymous" : `Hello, ${FIRSTNAME}`;
};
setName();

//이벤트 객체 공통 프로퍼티
const $onTimeDiv = document.getElementById("checkTimeArea");
const $onTimeCheck = document.querySelector(
  "#checkTimeArea input[type=checkbox]"
);
const onTimeChild = [...$onTimeDiv.children];
$onTimeCheck.onchange = (e) => {
  e.target.classList.toggle("hidden");
  e.target.previousSibling.innerText = "10시 출근했음";
  // onTimeChild.forEach((child) => {
  //   child.classList.toggle("hidden");
  // });
};

//마우스 이벤트 : drag
const $box = document.getElementById("dragBox");
const initialPos = { x: 0, y: 0 };
const offset = { x: 0, y: 0 };
const moveBox = (e) => {
  offset.x = e.clientX - initialPos.x;
  offset.y = e.clientY - initialPos.y;
  $box.style.transform = `translate3d(${offset.x}px,${offset.y}px,0)`;
};
$box.addEventListener("mousedown", (e) => {
  initialPos.x = e.clientX - offset.x;
  initialPos.y = e.clientY - offset.y;
  document.addEventListener("mousemove", moveBox);
});
$box.addEventListener("mouseup", (e) => {
  document.removeEventListener("mousemove", moveBox);
});
