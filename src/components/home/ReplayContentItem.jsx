import Item from "antd/lib/list/Item";
import axios from "axios";
import { useEffect } from "react";

function ReplayContentItem({ img, day, title, url, item }) {
  return (
    <li style={{ width: "50%" }}>
      <a href={`https://www.youtube.com/embed/${url}`}>
        <img src={img} alt="유튜브 썸네일" style={{ width: "100%" }} />
        <div>
          <div>
            <div className="subTit">
              <h4>1083회</h4>
              <p>{day}</p>
            </div>
            <h3>{title.substring(0, 15)}..</h3>
          </div>
          <div>
            <img src="https://jj2084jj.github.io/radioWeb/6.svg" alt="" />
            <p className="playCount">{item.count}</p>
          </div>
        </div>
      </a>
    </li>
  );
}
export default ReplayContentItem;
