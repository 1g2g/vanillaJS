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
