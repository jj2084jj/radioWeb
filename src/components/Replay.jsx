import TodayConerList from "./home/TodayConerList";
import DailyConer from "./letter/DailyConer";
import CommonBoard from "./letter/CommonBoard";
function Replay() {
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
          <CommonBoard title={"다시듣기"}></CommonBoard>
        </div>
      </div>
    </>
  );
}
export default Replay;
