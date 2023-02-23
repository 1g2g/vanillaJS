export class Loading {
  constructor($target) {
    this.area = $target;
    this.loaderBox = document.createElement("div");
    this.loaderBox.className = "loader-box";

    this.area.appendChild(this.loaderBox);
    this.render();
  }
  closeLoader() {
    const loaderBox = document.querySelector(".loader-box");
    loaderBox.remove();
  }
  render() {
    const loader = document.createElement("div");
    loader.className = "loader";
    loader.innerText = "Loading...";
    this.loaderBox.appendChild(loader);
  }
}
