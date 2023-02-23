export class Cards {
  constructor($target, data, cn) {
    this.area = $target;
    this.catList = data;
    this.className = cn;
    this.render();
  }
  card = (cat) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.classList.add(this.className);
    const img = new Image();
    img.src = cat.url;
    div.appendChild(img);
    return div;
  };
  render() {
    this.catList.forEach((cat) => {
      this.area.appendChild(this.card(cat));
    });
  }
}
