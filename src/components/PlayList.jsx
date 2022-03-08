import TodayConerList from "./home/TodayConerList";
import DailyConer from "./letter/DailyConer";
import CommonBoard from "./letter/CommonBoard";

function PlayList() {
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
          title={"선곡표"} 
          subTitle={"특정가수 도배는 자제해주시면 감사하겠습니다!-별밤"}
          ></CommonBoard>
        </div>
      </div>
    </>
  );
}
export default PlayList;
