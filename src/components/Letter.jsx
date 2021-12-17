import TodayConerList from "./home/TodayConerList";
import DailyConer from "./letter/DailyConer";
import LetterBoard from "./letter/LetterBoard";

function Letter() {
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
          <LetterBoard></LetterBoard>
        </div>
      </div>
    </>
  );
}
export default Letter;
