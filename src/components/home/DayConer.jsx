import React from "react";

function DayConer() {
  return (
    <>
      <div className="container dayConer">
        <div className="whiteBox con03">
          <div className="title">
            <img src="day.svg" alt="" />
            <h2>요일 코너</h2>
          </div>
          <div>
            <ul>
              <li>
                <h3>월</h3>
                <p>
                  토마호크 배! <br />
                  토막음악 퀴즈
                </p>
              </li>
              <li>
                <h3>화</h3>
                <p>
                  영업합니다 <br />
                  시즌2
                </p>
              </li>
              <li>
                <h3>수</h3>
                <p>ㄱ이나니...?</p>
              </li>
              <li>
                <h3>목</h3>
                <p>아무노래</p>
              </li>
              <li>
                <h3>금</h3>
                <p>
                  깨끗하고 <br />
                  어두운 곳
                </p>
              </li>
              <li>
                <h3>토</h3>
                <p>
                  우리 삶이 <br />
                  음악이 된다면
                </p>
              </li>
              <li>
                <h3>일</h3>
                <p>
                  고전이 <br />
                  빛나는 밤
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DayConer;
