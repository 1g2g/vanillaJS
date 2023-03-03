import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";
import createRouter from "./router.js";

const container = document.querySelector(".app");
const homepage = new HomePage(container);
const signuppage = new SignupPage(container);
const pages = {
  home: () => {
    container.innerHTML = "";
    homepage.render();
  },
  signup: () => {
    container.innerHTML = "";
    signuppage.render();
  },
};

const router = createRouter();

router.addRoute("#/", pages.home).addRoute("#/signup", pages.signup).start();
