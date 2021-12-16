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
          "https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=e4a46faa887790f4ecfad07f9d7aa5de&format=json",
          {
            params: {
              limit: 5,
            },
          }
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
            <img src="/play.svg" alt="" />
            <h2>다시 듣기</h2>
          </div>
          <div>
            <ul>
              {topTracks.map((track, index) => (
                <List
                  key={index}
                  name={track.artist.name}
                  title={track.name}
                  img={track.image[1]["#text"]}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="whiteBox con06">
          <div className="title">
            <img src="/show.svg" alt="" />
            <h2>보이는 라디오</h2>
          </div>
          <div>
            <ul>
              <li>
                <img src="/2021-12-13.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
              <li>
                <img src="/2021-12-12.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
              <li>
                <img src="/2021-12-11.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="/6.svg" alt="" />
                    <p className="playCount">52</p>
                  </div>
                </div>
              </li>
              <li>
                <img src="/2021-12-10.png" alt="" />
                <div>
                  <div>
                    <div className="subTit">
                      <h4>1083회</h4>
                      <p>2021-12-13</p>
                    </div>
                    <h3>별밤 초대석 with 카이</h3>
                  </div>
                  <div>
                    <img src="/6.svg" alt="" />
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
