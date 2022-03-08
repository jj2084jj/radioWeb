import TodayConerList from "./home/TodayConerList";
import DailyConer from "./letter/DailyConer";
import CommonBoard from "./letter/CommonBoard";

import React from "react";
function Mini() {
  return (
    <>
     <div
        className="container"
        style={{ display: "flex", justifyContent: "left" }}
      >
        <div style={{ width: "291px", marginRight: "18px" }}>
          <TodayConerList></TodayConerList>
          <DailyConer></DailyConer>
        </div>
        <div>
          <CommonBoard 
          title={"Mini 메시지"} 
          subTitle={"특정가수 도배는 자제해주시면 감사하겠습니다!-별밤"}
          ></CommonBoard>
        </div>
      </div>
    </>
  );
}
export default Mini;
