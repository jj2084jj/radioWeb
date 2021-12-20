import axios from "axios";
import { useEffect, useState } from "react";
import List from "./List";
import ReplayContentItem from "./ReplayContentItem";

function ReplayContents() {
  const [topTracks, setTopTracks] = useState([]);
  const [youtubeList, setYoutubeList] = useState([]);
  const URL = process.env.REACT_APP_YOUTUBE_API_KEY;

  async function getYoutube() {
    const body = {
      params: {
        key: URL,
        channelId: "UCKNZsAeQXpvI-Mpoc0ZKhsA",
        part: "snippet",
        type: "video",
        order: "date",
        maxResults: 4,
      },
    };
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      body
    );
    res.data.items.map(async (item) => {
      const count = await getCount(item);
      item.count = count.toLocaleString("en");
      return item;
    });
    return res.data.items;
  }
  async function getCount(item) {
    const cc = await axios
      .get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          part: "statistics",
          key: URL,
          id: item.id.videoId,
        },
      })
      .then((res) => {
        return res.data.items[0].statistics.viewCount;
      });
    return cc;
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
  useEffect(async () => {
    await getTopTrack();
    await getYoutube().then(async (res) => {
      return await setYoutubeList(res);
    });
  }, []);
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
                      item={item}
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
