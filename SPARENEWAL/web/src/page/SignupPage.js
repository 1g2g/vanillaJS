import Header from "../components/Header.js";
import ContentTitle from "../components/ContentTitle.js";
export default function SignUp($target) {
  this.render = () => {
    new Header({ $target });
    this.$main = document.createElement("main");
    $target.appendChild(this.$main);
    new ContentTitle(this.$main, "Sign up PeoPle");

    this.$elem = document.createElement("div");
    this.$elem.id = "form_container";
    this.$elem.innerHTML = `<span class="form_elem">
    <label for="name">이름<span>(필수*)</span></label>
    <input id="name" placeholder="이름">
</span>
<span class="form_elem">                
    <label for="email">이메일<span>(필수*)</span></label>
    <input id="email" placeholder="이메일">
</span>
<span class="form_elem">                
    <label for="nickname">닉네임<span>(필수*)</span></label>
    <input id="nickname" placeholder="닉네임">
</span>
<span class="form_elem">                
    <label for="role">직군<span>(필수*)</span></label>
    <select id="role" name="role">
        <option value="">직군을 선택해주세요</option>
        <option value="backend">백엔드</option>
        <option value="frontend">프론트엔드</option>
        <option value="fullstack">풀스택</option>
    </select>
</span>
<span class="form_elem">                
    <label for="MBTI">MBTI</label>
    <select id="MBTI" name="MBTI">
        <option value="">MBTI를 선택해주세요</option>
        ${[
          "ENFJ",
          "ENTJ",
          "ENFP",
          "ENTP",
          "ESFJ",
          "ESTJ",
          "ESFP",
          "ESTP",
          "INFJ",
          "INTJ",
          "INFP",
          "INTP",
          "ISFJ",
          "ISTJ",
          "ISFP",
          "ISTP",
        ].map((elem) => `<option value="${elem}">${elem}</option>`)}
    </select>
</span>

<span class="form_elem">
    <button type="submit">등록</button>
</span>`;
    $target.appendChild(this.$elem);
  };
}
