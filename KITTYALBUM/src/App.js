import { getItem, setItem } from "./utils/localstorage";
import { Api } from "./api/catApi.js";
import { Loading } from "./components/Loading.js";
import { Result } from "./components/Result.js";
export class App {
  constructor($target) {
    this.area = $target;
    $target.innerHTML = `<div class="searching-box"><input type="text" class="input-title"/></div>`;
    this.searchingBox = document.querySelector(".searching-box");
    this.area.appendChild(this.searchingBox);
    this.render();
    this.callCat();
  }
  appendTitle(h1, title) {
    h1.innerText = title;
    this.searchingBox.appendChild(h1);
  }
  async callCat() {
    const loader = new Loading(this.searchingBox); //로딩중
    this.catList = await new Api(); //고양이 사진 받아옴
    loader.closeLoader(); //로딩중 닫기
    new Result(this.area, this.catList); //고양이 사진 결과 띄우기
  }
  render() {
    const h1 = document.createElement("h1");
    const inputTitle = document.querySelector(".input-title");
    if (getItem("title")) {
      this.appendTitle(h1, getItem("title"));
    }
    inputTitle.addEventListener("change", (e) => {
      this.appendTitle(h1, inputTitle.value);
      setItem("title", inputTitle.value);
    });
  }
}
