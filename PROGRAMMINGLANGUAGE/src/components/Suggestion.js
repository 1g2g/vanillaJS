export default function Suggestion({ $target, initialState, onSelect }) {
  this.div = document.createElement("div");
  this.div.className = "Suggestion";
  $target.appendChild(this.div);

  this.state = initialState;

  this.setState = (next) => {
    this.state = next;
    this.render();
  };

  window.addEventListener("keyup", (e) => {
    // moveUpDown(e.key);
    let { selectedIdx, items } = this.state;
    const direction = e.key;
    const len = items.length - 1;
    let nextIdx;

    if (direction === "ArrowUp") {
      nextIdx = selectedIdx === 0 ? len : selectedIdx - 1;
      this.setState({ ...this.state, selectedIdx: nextIdx });
    } else if (direction === "ArrowDown") {
      nextIdx = selectedIdx === len ? 0 : selectedIdx + 1;
      this.setState({ ...this.state, selectedIdx: nextIdx });
    } else if (direction === "Enter") {
      onSelect(this.state.items[this.state.selectedIdx]);
    }
    console.log(this.state);
  });
  this.div.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    if ($li) {
      const { index } = $li.dataset;
      try {
        onSelect(this.state.items[parseInt(index)]);
      } catch (e) {
        alert("무언가 잘못되었습니다! 선택할 수 없습니다!");
      }
    }
  });

  this.render = () => {
    const { selectedIdx, items = [] } = this.state;
    console.log(selectedIdx);
    if (items.length > 0) {
      this.div.style.display = "block";
      this.div.innerHTML = `        <ul>
      ${items
        .map(
          (item, index) => `
        <li class="${
          index === selectedIdx ? "Suggestion__item--selected" : ""
        }" data-index="${index}">${item}</li>
        </li>
      `
        )
        .join("")}
    </ul>`;
    } else {
      this.div.style.display = "none";
      new Error();
    }
  };
  this.render();
}
