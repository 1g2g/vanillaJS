import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";
console.log(window.location, `${window.location.origin}/web/`);
// if (window.location == `${window.location.origin}/web/`)
//   new HomePage(document.querySelector(".app"));
// else new SignupPage(document.querySelector(".app"));
new HomePage(document.querySelector(".app"));
