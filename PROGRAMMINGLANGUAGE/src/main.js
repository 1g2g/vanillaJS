// import {App} from './App.js'

const SearchInput = document.querySelector(".SearchInput");
const SearchInput__input = document.querySelector(".SearchInput__input");
const suggest = document.querySelector(".Suggestion");
const suggestUl = document.querySelector(".Suggestion ul");
const SelectedUl = document.querySelector(".SelectedLanguage ul");

let keyword = "";
let relatedArr = [];
let position = -1;
let prevPosition = 0;
let selectedArr = [];

window.onload = () => {
  SearchInput__input.focus();
};

const relatedApi = async () => {
  try {
    const response = await fetch(
      `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`
    );
    const relatedArr = await response.json();
    return relatedArr;
  } catch {
    const errData = await response.json();
    throw errData;
  }
};
const removeAllChildNodes = (parent) => {
  while (parent.hasChildNodes()) {
    //자식 요소가 있는지 확인-false가 될때까지 반복
    parent.removeChild(parent.firstChild); // 첫번째 자식 요소를 삭제
  }
};
//강조
const highlight = (sentence) => {
  let overlapped = [];
  overlapped = sentence.toLowerCase().split(keyword.toLowerCase());
  console.log(overlapped);
  return overlapped;
};
//연관검색어
const renderRelated = () => {
  console.log(relatedArr);

  // console.log(ul.childNodes)
  // const children=ul.childNodes;
  // children.remove()
  // // ul.childNodes.forEach((nodes)=>{
  // //     nodes.remove();
  // // })
  //     while(suggestUl.hasChildNodes()){ //자식 요소가 있는지 확인-false가 될때까지 반복
  //         suggestUl.removeChild(suggestUl.firstChild); // 첫번째 자식 요소를 삭제
  //    }
  removeAllChildNodes(suggestUl);
  if (keyword) {
    relatedArr.forEach((elem) => {
      const li = document.createElement("li");
      let overlapped = [];
      overlapped = highlight(elem);

      li.innerHTML = `${overlapped[0]}<span class="Suggestion__item--matched">${keyword}</span>${overlapped[1]}`;
      li.setAttribute("value", elem);
      li.addEventListener("click", (e) => {
        addRecordList(elem);
      });
      suggestUl.appendChild(li);
    });
  }
};
//api
suggest.style.display = "none";
SearchInput__input.addEventListener("input", async (e) => {
  position = -1;
  keyword = e.target.value;
  relatedArr = await relatedApi();
  console.log(e.target.value.length);
  if (e.target.value.length) suggest.style.display = "block";
  else suggest.style.display = "none";
  renderRelated();
});
//키 이동
SearchInput__input.addEventListener("keydown", (e) => {
  const len = relatedArr.length;
  if (e.keyCode == "38") {
    console.log("up");
    --position;
  } else if (e.keyCode == "40") {
    console.log("down");
    ++position;
  }

  if (position < 0) {
    position += len;
  } else if (position >= len) {
    position -= len;
  }
  let idx = position;
  // console.log(suggestUl.childNodes[4])
  if (suggestUl.hasChildNodes) {
    suggestUl.childNodes[idx].classList.add("Suggestion__item--selected");
    suggestUl.childNodes[prevPosition].classList.remove(
      "Suggestion__item--selected"
    );
  }
  prevPosition = idx;
  // console.log(position,idx,relatedArr[idx])
});

//검색
SearchInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = relatedArr[position];
  addRecordList(value);
});
//기록 추가
const addRecordList = (value) => {
  alert(value);
  // keyword=value;
  // SearchInput__input.value=keyword;

  const len = selectedArr.length - 1;
  for (let i = 0; i <= len; i++) {
    let elem = selectedArr.shift();
    if (elem !== value) selectedArr.push(elem);
    // console.log(elem,value,selectedArr)
  }
  selectedArr.push(value);
  if (selectedArr.length >= 5) selectedArr.shift();

  removeAllChildNodes(SelectedUl);

  selectedArr.forEach((node) => {
    const li = document.createElement("li");
    li.textContent = node;
    SelectedUl.appendChild(li);
  });
};
