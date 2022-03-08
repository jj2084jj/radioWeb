import axios from "axios";
import { useState, useEffect } from "react";
import ReplayContentItem from "../home/ReplayContentItem";

function ShowItem({ subTitle }) {
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
        maxResults: 9,
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
  useEffect(async () => {
    await getYoutube().then(async (res) => {
      return await setYoutubeList(res);
    });
  }, []);
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
  return (
    <>
      <div>
        <div className="TopBtnWrap">
          <img
            src="https://jj2084jj.github.io/radioWeb/img-icon-rule.jpg"
            alt="rule"
          />
          이용안내
        </div>
      </div>
      <div className="notice">
        <button>
          <img
            src="https://jj2084jj.github.io/radioWeb/free-icon-lightbulb-702797.png"
            alt=""
          />
          <p>{subTitle}</p>
        </button>
      </div>
      <div className="searchRadio">
        <div>
          <input type="text" placeholder="제목을 입력해 주세요." />
        </div>
        <div>
          <select name="year" id="">
            <option value="">년도</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>

      <div className="showItemList">
        <div>
          <ul>
            {youtubeList
              ? youtubeList.map((item, index) => (
                  <ReplayContentItem
                    key={index}
                    img={item.snippet.thumbnails.medium.url}
                    day={item.snippet.publishedAt.substring(0, 10)}
                    url={item.id.videoId ? item.id.videoId : item.id.playlistId}
                    item={item}
                    title={item.snippet.description}
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ShowItem;
