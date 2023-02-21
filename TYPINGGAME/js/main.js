// const axios = require("axios");
const wordDisplay = document.querySelector(".word-display");
const wordInput = document.querySelector(".word-input-box input");
const lastTime = document.querySelector(".last-time span");
const score = document.querySelector(".score span");

let word = null;
let scoreValue = 1;
let time = 0;
//axios사용
// function getWord() {
//   return axios.get("https://random-word-api.herokuapp.com/word").then((res) => {
//     return res.data[0];
//   });
// }

//fetch 사용
function getWord() {
  var url = "https://random-word-api.herokuapp.com/word";
  return fetch(url).then((response) => {
    return response.json();
  });
}
const setScore = () => {
  scoreValue++;
  score.innerText = scoreValue;
};

const checkCorrect = (value) => {
  if (value === word) {
    console.log("정답입니다.");
    setScore();
    wordInput.value = "";
  } else {
    console.log(value, word, "오답입니다.");
  }
  setWord();
};

const handleInput = (e) => {
  e.preventDefault();
  checkCorrect(e.target.value);
};
const timer = () => {
  time--;
  lastTime.innerText = time;
};
const timeOut = () => {
  if (time <= 0) {
    setWord();
    time = 11;
    clearInterval(timeOut);
  }
};
async function setWord() {
  const obj = await getWord();
  word = String(obj);
  console.log(word);
  wordDisplay.innerText = word;

  time = 11;
}
function init() {
  setWord();

  setInterval(timer, 1000);
  setInterval(timeOut, 100);
  wordInput.addEventListener("change", handleInput);
}

init();
