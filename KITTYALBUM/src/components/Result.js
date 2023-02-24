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
    new Cards(this.$wrapper, catList, "first-load");
    this.scrollOver();
  }
  scrollOver() {
    const options = {
      root: null, //  null일 경우 브라우저 viewport
      rootMargin: "10px",
      threshold: [0, 0.5],
    };

    // IntersectionObserver 생성
    const io = new IntersectionObserver((entries, observer) => {
      // IntersectionObserverEntry 객체 리스트와 observer 본인(self)를 받음
      // 동작을 원하는 것 작성
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //지정한 영역에 출입하면
          newApi().then((cats) => new Cards(this.$wrapper, cats, "new-load")); //새로운 고양이list를 불러와 렌더링
          observer.observe(document.querySelector(".wrapper").lastChild); //wrapper 가장 마지막 요소를 observer로 지정
        }
      });
    }, options);
    const lastData = document.querySelector(".wrapper").lastChild;
    io.observe(lastData);
  }
}
