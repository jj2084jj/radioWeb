import "scss/common.scss";

function DailyConer() {
  return (
    <>
      {/* <div className="container "> */}
      <div className="whiteBox con01" style={{ marginTop: "20px" }}>
        <div className="title">
          <img src="https://jj2084jj.github.io/radioWeb/day.svg" alt="" />
          <h2>요일 코너</h2>
        </div>
        <div className="dailyConerList">
          <ul>
            <li>
              <div className="dailyName">
                <h2> 월</h2>
              </div>
              <div>토마호크 배! 토막음악 퀴즈</div>
            </li>
            <li>
              <div className="dailyName">
                <h2> 화</h2>
              </div>
              <div>영업합니다 시즌2</div>
            </li>
            <li>
              <div className="dailyName">
                <h2> 수</h2>
              </div>
              <div>ㄱ이나니...?</div>
            </li>
            <li>
              <div className="dailyName">
                <h2> 목</h2>
              </div>
              <div>아무노래</div>
            </li>
            <li>
              <div className="dailyName">
                <h2> 금</h2>
              </div>
              <div>깨끗하고 어두운 곳</div>
            </li>
            <li>
              <div className="dailyName">
                <h2> 토</h2>
              </div>
              <div>우리 삶이 음악이 된다면</div>
            </li>
            <li>
              <div className="dailyName">
                <h2> 일</h2>
              </div>
              <div>고전이 빛나는 밤</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="notice"></div>
      {/* </div> */}
    </>
  );
}
export default DailyConer;
