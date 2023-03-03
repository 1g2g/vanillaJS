export default function CardInterface({ $target, initialState, onSelect }) {
  this.$elem = document.createElement("div");
  this.$elem.id = "cards_container";
  console.log($target);
  $target.appendChild(this.$elem);

  this.setState = initialState;
  this.setState = (next) => {
    this.state = next;
    this.render();
  };

  this.$elem.addEventListener("click", onSelect);

  this.render = () => {
    const members = this.state;
    const cardStatus = JSON.parse(localStorage.getItem("cardStatus"));
    console.log(members);
    if (members) {
      this.$elem.innerHTML = members
        .map(
          (mem, idx) =>
            `<div idx="${idx}" class="${cardStatus[idx].status}">
                <div class="card_plane card_plane--front">${mem.name}</div>
                <div class="card_plane card_plane--back">${mem.mbti}</div>
            </div>`
        )
        .join("");
    } else {
      const members = JSON.parse(localStorage.getItem("personalInfo"));
      const cardStatus = JSON.parse(localStorage.getItem("cardStatus"));

      // this.$elem.innerHTML=members.map((mem,idx)=>
      // `<div idx="${idx}" class=${cardStatus[idx].status}>
      //     <div class="card_plane card_plane--front">${mem.name}</div>
      //     <div class="card_plane card_plane--back">${mem.mbti}</div>
      // </div>`
      // ).join("");
    }
  };
  this.render();
}
