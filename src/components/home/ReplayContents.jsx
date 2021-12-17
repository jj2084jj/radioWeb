import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";
import ReplayContentItem from "./ReplayContentItem";

function ReplayContents() {
  const [topTracks, setTopTracks] = useState([]);
  const [youtubeList, setYoutubeList] = useState([]);
  const URL = process.env.REACT_APP_YOUTUBE_API_KEY;
  let list = [];
  async function getYoutube() {
    const body = {
      params: {
        key: URL,
        channelId: "UCKNZsAeQXpvI-Mpoc0ZKhsA",
        part: "snippet",
        type: "video",
        order: "date",
        maxResults: 2,
      },
    };
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      body
    );
    // setYoutubeList(res.data.items);
    const newYoutubeLlist = res.data.items.map(async (item) => {
      const count = await getCount(item);
      item.count = count;
      return item;
    });
    setYoutubeList(youtubeList);
  }
  async function getCount(item) {
    const res = axios.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        part: "statistics",
        key: URL,
        id: item.id.videoId,
      },
    });
    return res.data;
    // setYoutubeList((youtubeList) => {
    //   console.log(youtubeList, "ininininininininin");
    //   let newYoutubeList;
    //   if (youtubeList) {
    //     newYoutubeList = youtubeList.map((el) => {
    //       console.log(el, "in youtbe le");
    //       return el;
    //     });
    //     return newYoutubeList;
    //   }
    // });
    // }).then((res) => {
    //   item.count = res.data.items[0].statistics.viewCount;

    //   list.push(item);

    //   console.log(list, "리스트");
    //   setYoutubeList(list);
    //   //
    // });
  }
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
        setTopTracks(res.data.tracks.track);
      });
  }
  useEffect(() => {
    console.log("in useeffect1");
    getTopTrack();
    getYoutube();
  }, []);
  // useEffect(() => {
  //   console.log("in useeffect2");
  //   if (youtubeList) {
  //     youtubeList.forEach((el) => {
  //       console.log("hi");
  //       getCount(el);
  //     });
  //   }
  // }, [youtubeList]);
  return (
    <>
      <div className="container todayConer">
        <div className="whiteBox con05">
          <div className="title">
            <img src="https://jj2084jj.github.io/radioWeb/play.svg" alt="" />
            <h2>다시 듣기</h2>
          </div>
          <div>
            <ul>
              {topTracks.map((track, index) => (
                <List key={index} name={track.artist.name} title={track.name} />
              ))}
            </ul>
          </div>
        </div>
        <div className="whiteBox con06">
          <div className="title">
            <img src="https://jj2084jj.github.io/radioWeb/show.svg" alt="" />
            <h2>보이는 라디오</h2>
          </div>
          <div>
            <ul>
              {youtubeList
                ? youtubeList.map((item, index) => (
                    <ReplayContentItem
                      key={index}
                      img={item.snippet.thumbnails.medium.url}
                      day={item.snippet.publishedAt.substring(0, 10)}
                      url={
                        item.id.videoId ? item.id.videoId : item.id.playlistId
                      }
                      title={item.snippet.description}
                    />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReplayContents;
