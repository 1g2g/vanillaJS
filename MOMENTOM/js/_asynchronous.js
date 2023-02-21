const constantWindowInfo = setInterval(() => {
  //시간주기작업 설정
  console.log(this);
}, 1000);
setTimeout(() => {
  //setTimeout : 작업처리 지연
  clearInterval(constantWindowInfo); //시간주기작업 해제
}, 2000);

//promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let flag = true;
    if (flag === true) resolve("promise"); //promise의 then 실행
    else reject("flag=false");
  }, 3000);
});
promise
  .then((value) => {
    console.log(value, "성공");
  })
  .catch((error) => {
    console.log(error);
  });

//promise 렬 처리
const arrFunc = [];
for (let i = 0; i < 5; i++) {
  const Func = (resolve) => {
    console.log(`${i}번째 함수 처리`, new Date().toLocaleTimeString());
    setTimeout(() => {
      resolve(i);
    }, 2000 * Math.random());
  };

  arrFunc.push(Func);
}
const arrPromise = arrFunc.map((func) => {
  new Promise(func).then((resolve) => {
    console.log(`${resolve}번째 함수 완료`, new Date().toLocaleTimeString());
  });
});
console.log(arrPromise);
Promise.all(arrPromise).then(() => {
  console.log("모든 작업 완료");
});

//promise 직렬 처리
Promise.resolve()
  .then(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("첫 번째 Promise", new Date().toLocaleTimeString());
        resolve(1);
      });
    });
  })
  .then(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        console.log("두 번째 Promise", new Date().toLocaleTimeString());
        resolve(2);
      });
    });
  });
//await와 async
start();
async function start() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("첫 번째 Promise", new Date().toLocaleTimeString());
      resolve(1);
    });
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("두 번째 Promise", new Date().toLocaleTimeString());
      resolve(2);
    });
  });
}
