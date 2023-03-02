import ContentTitle from "../components/ContentTitle.js";
import Header from "../components/Header.js";
import CardInterface from "../components/CardInterface.js";
import callApi from "../api/callApi.js";

export default function HomePage($target) {
  new Header({ $target });

  this.$main = document.createElement("main");
  $target.appendChild(this.$main);
  new ContentTitle(this.$main, "Great PeoPle");

  this.addCard = (card) => {
    let prev = JSON.parse(localStorage.getItem("cardStatus"));

    const cardIdx = card.getAttribute("idx");

    prev.forEach((elem, idx) => {
      if (idx === Number(cardIdx)) {
        const a = prev.slice(0, idx);
        const b = prev.slice(idx + 1);
        prev = [...a, { idx: idx, status: "card is-flipped" }, ...b];
      }
    });
    localStorage.setItem("cardStatus", JSON.stringify(prev));
  };

  const cardInterface = new CardInterface({
    $target: this.$main,
    initialState: [],
    onSelect: (e) => {
      const card = e.target.closest(".card");

      // e.target.parentNode.childNodes.forEach((node)=>{
      //     console.log(node)
      //     node.removeClass("is-flipped")
      // })
      card.classList.add("is-flipped");
      this.addCard(card);
    },
  });

  this.setState = (next) => {
    this.state = {
      ...this.state,
      ...next,
    };
    localStorage.setItem("personalInfo", JSON.stringify(this.member));

    // localStorage.setItem(
    //   "cardStatus",
    //   JSON.stringify(
    //     this.member.map((mem, idx) => {
    //       return { idx: idx, status: "card" };
    //     })
    //   )
    // );
    cardInterface.setState(this.member);
  };

  const callRes = async () => {
    this.member = await callApi();
    this.member.forEach((mem, idx) => {
      this.member[idx]["idx"] = idx;
    });
    this.setState(this.member);
  };
  callRes();
}
