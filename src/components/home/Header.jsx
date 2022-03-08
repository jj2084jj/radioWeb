import React, { useEffect, useState } from "react";
import "./Header.scss";
import TopMenu from "../TopMenu";

function Header() {
  const [hover, setHover] = useState(false);

  function menuClick() {
    hover === false ? setHover(true) : setHover(false);
  }

  return (
    <>
      <TopMenu hover={hover}></TopMenu>
      <header className="container topMenu">
        <div className="headerLeft">
          <div
            className="menuIcon"
            style={{ cursor: "pointer", zIndex:"3" }}
            onClick={menuClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="siteIcon">
            <img
              src="https://jj2084jj.github.io/radioWeb/mbc-logo.png"
              alt="mbclogo"
            />
          </div>
        </div>
        <div className="headerRight">
          <div className="search">
            <img
              src="https://jj2084jj.github.io/radioWeb/search.svg"
              alt="search"
            />
          </div>
          <div className="ticket">
            <img
              src="https://jj2084jj.github.io/radioWeb/ticket.svg"
              alt="ticket"
            />
          </div>
          <div>
            <img
              src="https://jj2084jj.github.io/radioWeb/user.svg"
              alt="user"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
