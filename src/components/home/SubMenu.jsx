import { BrowserRouter, Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./SubMenu.scss";
import axios from "axios";

function SubMenu() {
  return (
    <>
      <div className="container menuLine">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mini">Mini 메세지</Link>
          </li>
          <li>
            <Link to="/playlist">선곡표</Link>
          </li>
          <li>
            <Link to="/letter">사연과 신청곡</Link>
          </li>
          <li>
            <Link to="/replay">다시 듣기</Link>
          </li>
          <li>
            <Link to="/show">보이는 라디오</Link>
          </li>
          <li>
            <a href="https://www.imbc.com/broad/radio/radiogift/index.html">
              상품 문의
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/starnight959/">
              인스타그램 starnight959
            </a>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default SubMenu;
