import { NavLink } from "react-router-dom";
import React from "react";
import "scss/common.scss";

const activeStyle = { color: "white" };

function SubMenu() {
  return (
    <>
      <div className="container menuLine">
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mini" activeStyle={activeStyle}>
              Mini 메세지
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlist" activeStyle={activeStyle}>
              선곡표
            </NavLink>
          </li>
          <li>
            <NavLink to="/letter" activeStyle={activeStyle}>
              사연과 신청곡
            </NavLink>
          </li>
          <li>
            <NavLink to="/replay" activeStyle={activeStyle}>
              다시 듣기
            </NavLink>
          </li>
          <li>
            <NavLink to="/show" activeStyle={activeStyle}>
              보이는 라디오
            </NavLink>
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
