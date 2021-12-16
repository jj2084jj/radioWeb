import CalenderConer from "./home/CalenderConer";
import DayConer from "./home/DayConer";
import ReplayContents from "./home/ReplayContents";
import TodayConer from "./home/TodayConer";

function Home() {
  return (
    <>
      <TodayConer></TodayConer>
      <DayConer></DayConer>
      <CalenderConer></CalenderConer>
      <ReplayContents></ReplayContents>
    </>
  );
}

export default Home;
