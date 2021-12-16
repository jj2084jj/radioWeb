import React from "react";

function Header() {
  return (
    <footer>
      <div className="container">
        <div className="ftrTop">
          <div>
            <img src="footer-logo-mini.png" alt="" />
            <p>
              문자참여: #8001 정보이용료 SMS: 50원, MMS: 100원 | 서울시 마포구
              성암로 267 (03925) &#60;별이 빛나는 밤에 &#62; 담당자앞
            </p>
          </div>
          <div>프로그램 전체보기</div>
        </div>
        <div className="ftrBottom">
          <div>
            <ul>
              <li>
                <a
                  href="https://www.imbc.com/broad/radio/radiogift/index.html"
                  target="_blank"
                >
                  라디오 상품 문의
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://clip.imbc.com/Brand/mbc?station=672"
                  target="_blank"
                >
                  봉춘 라디오
                </a>{" "}
              </li>
              <li>
                <p>RADIO SNS</p>
                <a href="https://www.facebook.com/radiombc/" target="_blank">
                  <img src="logo-facebook.png" alt="facebook" />
                </a>

                <a
                  href="https://www.instagram.com/starnight959/"
                  target="_blank"
                >
                  <img src="logo-instagram.png" alt="instagram" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKNZsAeQXpvI-Mpoc0ZKhsA"
                  target="_blank"
                >
                  <img src="logo-youtube.png" alt="youtube" />
                </a>
              </li>
              <li>
                <a href="http://mmt.imbc.com/#m6" target="_blank">
                  온라인 공고 제휴
                </a>{" "}
              </li>
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
