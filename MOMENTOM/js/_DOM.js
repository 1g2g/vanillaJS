"use strict";
const $study = document.getElementById("_DOM");
// $study.insertAdjacentElement(`afterbegin`, `<ul>하이</ul>`);

const $li = document.createElement("li");
// $study.appendChild($li);
// const textNode = document.createTextNode("javascript");
// $li.appendChild(textNode);
$li.textContent = "typescript";

const $ul = document.createElement("ul");
const studyList = ["python", "javascript"];
$ul.textContent = "공부 목록";
studyList.forEach((elem) => {
  const $list = document.createElement("li");
  $ul.appendChild($list);
  $list.textContent = elem;
});
$study.appendChild($ul);
$ul.insertBefore($li, $ul.lastElementChild); //ul의 마지막 자식에 li 추가

//노드 복사
const $deepUl = $ul.cloneNode(true);
$study.appendChild($deepUl);

//노드 교체
const $newSubject = document.createElement("li");
$newSubject.appendChild(document.createTextNode("java"));
$deepUl.replaceChild($newSubject, $deepUl.lastChild);

//노드 삭제
$deepUl.removeChild($deepUl.firstChild);

//속성
const $input = document.getElementById("question");
$input.setAttribute("value", "no");
const $checkbox = document.createElement("input");
$checkbox.setAttribute("type", "checkbox");
$checkbox.setAttribute("value", "studied");
$study.insertBefore($checkbox, $input);

//data 어트리뷰트
const users = [...document.querySelector(".users").children]; //li가 array로 저장됨
const admin = users.find((user) => user.dataset.userId === "1234");
//li,DOMStringMap{userId:'1234',role:'dmin'}

//스타일 조작
admin.style.color = "blue";
admin.style["background-color"] = "yellow";

admin.className = admin.className.replace("admin", "administer"); //클래스변경
const generalUser = admin.nextSibling.nextSibling;
generalUser.classList.add("user"); //클래스 추가
generalUser.classList.toggle("happy");

//스타일 객체 취득
const style = window.getComputedStyle(admin);
console.log(style);
