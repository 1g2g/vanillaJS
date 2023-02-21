//promise 예제 : 드림코딩
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "wonji" && password === "12") resolve(id);
        else reject(new Error("wrong id or password"));
      }, 1000);
    });
  }
  getRoles(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "wonji") resolve({ name: "wonji", role: "admin" });
        else reject(new Error("no access"));
      }, 1000);
    });
  }
}
const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const pw = prompt("enter your pw");
const id = "wonji";
const pw = "12";
userStorage
  .loginUser(id, pw)
  .then(userStorage.getRoles)
  //   .catch(console.log)
  .then((user) =>
    console.log(`Hello ${user.name}, you have a ${user.role} role`)
  )
  .catch(console.log);
