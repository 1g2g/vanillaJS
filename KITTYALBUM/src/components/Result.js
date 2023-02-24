import { Api } from "../api/catApi.js";
import { Cards } from "./Card";

async function newApi() {
  let cats = await new Api(); //고양이 사진 받아옴
  return new Promise((resolve) => {
    resolve(cats);
  });
}
export class Result {
  constructor($target, catList) {
    this.area = $target;
    this.catList = catList;
    // console.log(catList);
    const div = document.createElement("div");
    div.classList.add("wrapper");
    this.area.appendChild(div);
    this.$wrapper = document.querySelector(".wrapper");
    new Cards(this.$wrapper, catList);
    this.scrollOver();
  }
  async scrollOver() {
    const options = {
      root: null, // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
      rootMargin: "10px", // rootMargin을 '10px 10px 10px 10px'로 설정
      threshold: [0, 0.5, 1], // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
    };

    // IntersectionObserver 생성
    //스크롤 문제 발생지점
    const io = await new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let cats = newApi().then((cats) => new Cards(this.$wrapper, cats));
        }
      });
    }, options);
    const lastData = document.querySelector(".wrapper").lastChild;
    console.log(document.querySelector(".wrapper").lastChild);
    io.observe(lastData);
  }
}
