import axios from "axios";
import { useEffect } from "react";
import "./LetterBoard.scss";

function LetterBoard({ title, subTitle }) {
  useEffect(() => {
    // axios.get(
    //   "https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/tableServices/default/tables/{tableName}?api-version=2021-04-01"
    // );
  }, []);
  return (
    <>
      <div className="whiteBox" style={{ width: "909px" }}>
        <div className="title">
          <h2>{title}</h2>
        </div>
        {
          function () {
            if (title === "사연과 신청곡") {
              return (
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
              )
            }else if(title === "보이는 라디오"){
              return (
                <>
                <div>
                <div className="TopBtnWrap">
                  <img
                        src="https://jj2084jj.github.io/radioWeb/img-icon-rule.jpg"
                        alt="rule"
                      />
                      이용안내
                </div>
                </div>
                </>
              )
            }
          }()
        }

        <div className="notice">
          <button>
            <img
              src="https://jj2084jj.github.io/radioWeb/free-icon-lightbulb-702797.png"
              alt=""
            />
            <p>{subTitle}</p>
          </button>
          
          {
            function(){
              if(title === "보이는 라디오"){
                return (
                  <div className="searchRadio">
                    <div>
                      <input type="text" placeholder="제목을 입력해 주세요."/>
                    </div>
                    <div>
                      <select name="year" id="">
                        <option value="">년도</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        </select>
                    </div>
                  </div>
                )
              }
            }()
          }
        </div>
        <div className="table" style={{ marginTop: "195px" }}>
          테이블 백 개발 먼저 진행중
        </div>
      </div>
    </>
  );
}

export default LetterBoard;
