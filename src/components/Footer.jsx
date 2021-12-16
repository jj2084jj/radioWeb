import React from "react";

function Header() {
  return (
    <footer>
      <div class="container">
        <div class="ftrTop">
          <div>
            <img src="footer-logo-mini.png" alt="" />
            <p>
              문자참여: #8001 정보이용료 SMS: 50원, MMS: 100원 | 서울시 마포구
              성암로 267 (03925) &#60;별이 빛나는 밤에 &#62; 담당자앞
            </p>
          </div>
          <div>프로그램 전체보기</div>
        </div>
        <div class="ftrBottom">
          <div>
            <ul>
              <li>라디오 상품 문의</li>
              <li>봉춘 라디오</li>
              <li>
                <p>RADIO SNS</p>
                <img src="logo-facebook.png" alt="facebook" />
                <a href="https://www.instagram.com/starnight959/">
                  <img src="logo-instagram.png" alt="instagram" />
                </a>
                <img src="logo-youtube.png" alt="youtube" />
              </li>
              <li>온라인 공고 제휴</li>
            </ul>
          </div>
          <div>
            본 콘텐츠의 저작권은 MBC에 있습니다. <br />
            Copyright(c) Since 1996, MBC &#38;iMBC All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Header;
