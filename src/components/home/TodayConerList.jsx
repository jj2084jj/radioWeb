import React from "react";
import { NavLink } from "react-router-dom";

function TodayConerList() {
  return (
    <>
      <div className="whiteBox con01">
        <div className="title">
          <img
            src="https://jj2084jj.github.io/radioWeb/invalid-note.svg"
            alt=""
          />
          <h2>매일 코너</h2>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/letter">사연과 신청곡</NavLink>
            </li>
            <li>하루 틈</li>
            <li>내일 할 일</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodayConerList;
