export default function SearchInput({ $target, initialState, onChange }) {
  this.elem = document.createElement("form");
  this.elem.classname = "SearchInput";
  $target.appendChild(this.elem);
  this.elem.innerHTML = `<input  class="SearchInput__input"  type="text"  placeholder="프로그램 언어를 입력하세요." value=""/>`;

  this.elem.addEventListener("keyup", (e) => {
    const actionIgnoreKeys = [
      "Enter",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];
    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });
  this.elem.addEventListener("submit", (e) => e.preventDefault());
  this.state = initialState;
  this.setState = (next) => {
    this.state = next;
    this.render();
  };

  this.render = () => {};
}
