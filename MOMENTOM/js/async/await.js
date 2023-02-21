//async
async function fetchUser() {
  return "wonji";
}
fetchUser().then(console.log);

//await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getShrimp() {
  await delay(1000);
  return "🍤";
}
async function getHotDog() {
  await delay(1000);
  return "🌭";
}
async function pickFruits() {
  const shrimpPromise = getShrimp();
  const hotdogPromise = getHotdog();
  //promise로 병렬 실행
  const shrimp = await shrimpPromise;
  const hotdog = await hotdogPromise;
  //await로 기다림
  return `${shrimp}+${hotdog}`;
}
function pickAllFruit() {
  return Promise.all([getShrimp(), getHotDog()]).then((foods) =>
    foods.join("*")
  );
}
pickAllFruit().then(console.log);
function pickOnlyOne() {
  return Promise.race([getShrimp(), getHotDog()]);
}
pickOnlyOne().then(console.log);

//async와 await의 이해
function fetchItems() {
  return new Promise(function (resolve, reject) {
    //promise를 걸지 않으면 동기적으로 수행되어 items가 undefined가 됨
    setTimeout(function () {
      var items = [1, 2, 3];
      resolve(items);
    }, 3000);
  });
}
async function logItems() {
  var resultItems = await fetchItems();
  //fetchItems가 완료되어야 콘솔 출력 가능해짐
  console.log(resultItems); // [1,2,3]
}
logItems();

//예제
function fetchUser() {
  var url = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(url).then(function (response) {
    return response.json();
  });
}

function fetchTodo() {
  var url = "https://jsonplaceholder.typicode.com/todos/1";
  return fetch(url).then(function (response) {
    return response.json();
  });
}

async function callUserInfo() {
  try {
    const info = await fetchUser();
    if (info.id === 1) {
      const todo = await fetchTodo();
      console.log(todo.title);
    }
  } catch (error) {
    console.log(error);
  }
}
