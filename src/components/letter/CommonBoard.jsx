import axios from "axios";
import { useEffect } from "react";
import LetterItem from "../Item/LetterItem";
import ShowItem from "../Item/ShowItem";
import Mini from "../Item/Mini";
import PlayListItem from "../Item/PlayListItem";
import "./LetterBoard.scss";

function CommonBoard({ title, subTitle }) {
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
        {(function () {
          if (title === "사연과 신청곡") {
            return <LetterItem subTitle={subTitle}></LetterItem>;
          } else if (title === "보이는 라디오") {
            return <ShowItem subTitle={subTitle}></ShowItem>;
          } else if (title === "Mini 메시지") {
            return <Mini subTitle={subTitle}></Mini>;
          } else if (title === "선곡표") {
            return <PlayListItem subTitle={subTitle}></PlayListItem>;
          }
        })()}
        {/* <div className="table" style={{ marginTop: "195px" }}>
          테이블 백 개발 먼저 진행중
        </div> */}
      </div>
    </>
  );
}

export default CommonBoard;
