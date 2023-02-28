export default function SelectedLanguage({ $target, initialState }) {
  this.elem = document.createElement("div");
  this.elem.className = "SelectedLanguage";
  $target.appendChild(this.elem);

  this.state = { initialState };

  this.setState = (next) => {
    this.state = next;
    this.render();
  };

  this.render = () => {
    const fetchedLang = this.state;
    console.log(fetchedLang);
    if (fetchedLang.length > 0) {
      this.elem.innerHTML = ` <ul>${fetchedLang
        .map((lang) => `<li>${lang}</li>`)
        .join("")}
    
    </ul>`;
    }
  };
  this.render();
}
