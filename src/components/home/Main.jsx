import React from "react";
import "./Main.scss";

function Main() {
  window.addEventListener("load", function () {
    let logo = document.querySelector(".mainLogo");
    console.log(logo.style);
    setTimeout(() => {
      document.querySelector(".mainLogo").animate(
        { opacity: 1, top: "200px" },
        {
          duration: 2000,
          fill: "forwards",
        }
      );
    }, 200);
  });
  return (
    <>
      <div className="container main">
        <div className="mainLogo">
          <img src="/logo.png" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Main;
