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
          <img src="mbc-logo.png" alt="mbclogo" />
        </div>
      </div>
      <div className="headerRight">
        <div className="search">
          <img src="search.svg" alt="search" />
        </div>
        <div className="ticket">
          <img src="ticket.svg" alt="ticket" />
        </div>
        <div>
          <img src="user.svg" alt="user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
