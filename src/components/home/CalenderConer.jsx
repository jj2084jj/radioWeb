import { Calendar } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Music from "./Music";

function onPanelChange(value, mode) {
  console.log(value, mode);
}

function CalenderConer() {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    async function getList() {
      await axios
        .get(
          "https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&api_key=e4a46faa887790f4ecfad07f9d7aa5de&format=json"
        )
        .then((res) => {
          setMusicList(res.data.topalbums.album);
        });
    }
    getList();
  }, []);
  return (
    <>
      <div className="container">
        <div className="whiteBox con04">
          <div>
            <div className="title">
              <h2>2021년 12월</h2>
            </div>
            <div style={{ width: "100%", marginRight: 0 }}>
              <Calendar
                style={{ margin: "38px 0px" }}
                fullscreen={false}
                onPanelChange={onPanelChange}
              />
            </div>
          </div>
          <div>
            <div className="title">
              <img src="https://jj2084jj.github.io/radioWeb/sound.svg" alt="" />
              <h2>선곡표</h2>
            </div>
            <div>
              <ul className="playList">
                {musicList.map((music, index) => (
                  <Music
                    artist={music.artist}
                    url={music.url}
                    img={music.image[1]}
                    name={music.name}
                    key={index}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalenderConer;
