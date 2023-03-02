export default function ContentTitle($target,title){
    
    const $div=document.createElement("div");
    $div.className="content_title";
    $div.innerHTML=`<h1> ${title} </h1>`;
    $target.appendChild($div);
}