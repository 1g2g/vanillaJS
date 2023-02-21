//파일 업로드 및 정보 읽어오기
const fileDiv = document.getElementById("file");
const file = document.querySelector("input[type ='file']");

file.addEventListener("change", (e) => {
  const uploadedFile = e.target.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    // h1.textContent = uploadedFile.name;
    const h1TextNode = document.createTextNode(uploadedFile.name);
    h1.appendChild(h1TextNode);
    p.textContent = reader.result; //p에 결과 출력
    fileDiv.append(h1);
    fileDiv.append(p);
  });
  reader.readAsText(uploadedFile);
});
