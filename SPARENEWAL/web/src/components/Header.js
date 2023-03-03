export default function Header({ $target }) {
  const header = document.createElement("header");
  header.innerHTML = `<div class="header header_left">
    <span class="menu_name" id="menu_home">HOME</span>
</div>
<div class="header header_right">
    <span class="menu_name" id="menu_signup">SIGNUP</span>
</div>`;
  console.log($target);
  $target.appendChild(header);

  header.addEventListener("click", (e) => {
    const URL = window.location.origin;

    const $span = e.target.closest("span");
    // if($span.id==='menu_home') location.href=URL+"/web/"
    // if($span.id==='menu_signup') location.href=URL+"/web/signup"
    if ($span.id === "menu_home") location.href = "#/";
    if ($span.id === "menu_signup") location.href = "#/signup";
  });
}
//https://velog.io/@sjoleee_/VanillaJS-%EB%B0%94%EB%8B%90%EB%9D%BCJS%EB%A1%9C-SPA-%EC%BB%A4%EB%A8%B8%EC%8A%A4-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%9D%BC%EC%9A%B0%ED%84%B0
