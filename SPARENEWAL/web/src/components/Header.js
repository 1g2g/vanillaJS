export default function Header({ $target }) {
  const header = document.createElement("header");
  header.innerHTML = `<div class="header header_left">
    <span class="menu_name" id="menu_home">HOME</span>
</div>
<div class="header header_right">
    <span class="menu_name" id="menu_signup">SIGNUP</span>
</div>`;
  $target.appendChild(header);

  header.addEventListener("click", (e) => {
    const URL = window.location.origin;

    const $span = e.target.closest("span");
    // if($span.id==='menu_home') location.href=URL+"/web/"
    // if($span.id==='menu_signup') location.href=URL+"/web/signup"
    if ($span.id === "menu_home") location.href = "./index.html";
    if ($span.id === "menu_signup") location.href = "./signup.html";
  });
}
