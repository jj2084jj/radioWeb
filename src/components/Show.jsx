import TodayConerList from "./home/TodayConerList";
import DailyConer from "./letter/DailyConer";
import LetterBoard from "./letter/LetterBoard";


function Show() {
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
          <LetterBoard title={"보이는 라디오"}
          subTitle={"이 프로그램은 무료로 보실 수 있습니다."}
          ></LetterBoard>
        </div>
      </div></>)
}
export default Show;
