import React from "react";

function TodayConer() {
  return (
    <>
      <div className="container todayConer">
        <div className="whiteBox con01">
          <div className="title">
            <img src="invalid-note.svg" alt="" />
            <h2>매일 코너</h2>
          </div>
          <div>
            <ul>
              <li>사연과 신청곡</li>
              <li>하루 틈</li>
              <li>내일 할 일</li>
            </ul>
          </div>
        </div>
        <div className="whiteBox con02">
          <div className="title">
            <h2>Today</h2>
          </div>
          <div className="subTit">
            <span> 화요일</span> : 영업합니다 시즌 2
          </div>
          <div className="conText">
            <span> with. 데이브레이크 이원석 </span> <br />
            별밤의 원 앤 온리 영업부장, 이원석 부장님과 대장부엉이 펼치는,
            정정당당한 선곡대결!
          </div>
        </div>
      </div>
    </>
  );
}

export default TodayConer;
