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
const btnList = [...document.getElementById("event").children];
console.log(btnList);
btnList.forEach((btn) => {
  console.log(btn.value);
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
