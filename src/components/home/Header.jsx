import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="container topMenu">
      <div className="headerLeft">
        <div className="menuIcon">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="siteIcon">
          <img src="./img/mbc-logo.png" alt="mbc" />
        </div>
      </div>
      <div className="headerRight">
        <div className="search">
          <img src="./img/search.svg" alt="" />
        </div>
        <div className="ticket">
          <img src="./img/ticket.svg" alt="" />
        </div>
        <div>
          <img src="./img/user.svg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
