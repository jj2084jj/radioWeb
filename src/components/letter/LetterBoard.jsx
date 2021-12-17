import axios from "axios";
import { useEffect } from "react";
import "./LetterBoard.scss";

function LetterBoard() {
  useEffect(() => {
    // axios.get(
    //   "https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}?api-version=2021-04-01"
    // );
  }, []);
  return (
    <>
      <div className="whiteBox" style={{ width: "909px" }}>
        <div className="title">
          <h2>사연과 신청곡</h2>
        </div>
        <div className="TopBtnWrap">
          <button className="rule">
            <img
              src="https://jj2084jj.github.io/radioWeb/img-icon-rule.jpg"
              alt="rule"
            />
            게시판 운영 원칙
          </button>
          <button className="write">
            <img
              src="https://jj2084jj.github.io/radioWeb/img-icon-write.png"
              alt="write"
            />
            글쓰기
          </button>
        </div>
        <div className="notice">
          <button>
            <img
              src="https://jj2084jj.github.io/radioWeb/free-icon-lightbulb-702797.png"
              alt=""
            />
            <p>특정가수 도배는 자제해주시면 감사하겠습니다!-별밤</p>
          </button>
        </div>
        <div className="table" style={{ marginTop: "195px" }}>
          테이블 백 개발 먼저 진행중
        </div>
      </div>
    </>
  );
}

export default LetterBoard;
