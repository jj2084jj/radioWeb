import { queryByTitle } from "@testing-library/dom";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";

function ReplayContents() {
  const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    async function getTopTrack() {
      await axios
        .get(
          "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=e4a46faa887790f4ecfad07f9d7aa5de&format=json"
        )
        .then((res) => {
          console.log(res);
          setTopTracks(res.data.tracks.track);
        });
    }
    getTopTrack();
  }, []);

  return (
    <>
      <div className="container todayConer">
        <div className="whiteBox con05">
          <div className="title">
            <img src="./img/play.svg" alt="" />
            <h2>다시 듣기</h2>
          </div>
          <div>
            <ul>
              {topTracks.map((track, index) => (
                <List key={index} name={track} />
              ))}
              <li>
                <img src="./img/youtubeIcon.jpg" alt="" />
                <div>
                  <h5>12/13(월) 토마호크 배! 토막음악 퀴즈 with 박문치</h5>
                  <p>2021-12-13</p>
                </div>
              </li>
              <li>
                <img src="./img/youtubeIcon.jpg" alt="" />
                <div>
                  <h5>12/12(일) 고전이 빛나는 밤 with 이지혜 영화전문기자</h5>
                  <p>2021-12-12</p>
                </div>
              </li>
              <li>
                <img src="./img/youtubeIcon.jpg" alt="" />
                <div>
                  <h5>
                    12/11(토) 우리 삶이 음악이 된다면 with 노리플라이 권순관
                  </h5>
                  <p>2021-12-11</p>
                </div>
              </li>
              <li>
                <img src="./img/youtubeIcon.jpg" alt="" />
                <div>
                  <h5>
                    12/10(금) 깨끗하고 어두운 곳 with 양재웅 정신건강의학 전문의
                  </h5>
                  <p>2021-12-10</p>
                </div>
              </li>
              <li>
                <img src="./img/youtubeIcon.jpg" alt="" />
                <div>
                  <h5>12/9(목) 영업합니다 시즌2 with 데이브레이크 이원석</h5>
                  <p>2021-12-9</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="whiteBox con06">
          <div className="title">
            <img src="./img/show.svg" alt="" />
            <h2>보이는 라디오</h2>
          </div>
          <div>
            <ul>
              <li>
                <img src="./img/2021-12-13.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="./img/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
              <li>
                <img src="./img/2021-12-12.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="./img/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
              <li>
                <img src="./img/2021-12-11.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="./img/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
              <li>
                <img src="./img/2021-12-10.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="./img/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReplayContents;
