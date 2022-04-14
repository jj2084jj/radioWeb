import { Table, Slider } from "antd";
import React, { useEffect } from "react";
import rightIcon from "assets/10-16.svg";
import leftIcon from "assets/11-12.svg";
import playIcon from "assets/invalid-name@3x.jpg";
import soundIcon from "assets/21-3.svg";
import popupIcon from "assets/22-2.svg";

import axios from "axios";

//
import data from "json/LettersList.json";

console.log(data);

const columns = [
  {
    title: "방송일",
    dataIndex: "date",
    key: "date",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
    width: "70%",
  },
  {
    title: "길이",
    dataIndex: "count",
    key: "count",
  },
];

function Replay() {
  useEffect(async () => {
    axios
      .get(
        "https:api.odcloud.kr/api/15071046/v1/uddi:abe42915-3cb5-477d-8d53-b7430e5567f0_model",
        {
          params: {
            page: 1,
            perPage: 10,
            key: "M7sSvW0xFR2GgsHOFvbfuhZScc2ZEmPHuoCnD10JufV63nF8UXChAq1heu1tlPTtdZ%2FNioFON3Lv3SmGCvGRzw%3D%3D",
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  }, []);

  function err() {
    alert("서비스를 준비중입니다.");
  }

  return (
    <>
      <div id="replay">
        <div className="replay_top">
          <button onClick={err}>
            <img src={popupIcon} alt="" />
            <p> 팝업창으로 듣기</p>
          </button>
          <p>
            이 서비스는 Internet Explorer 9(IE 9) 이상 및 Chrome에 최적화돼
            있습니다. <br /> 다시듣기(팟캐스트) 서비스는 음악 저작권 문제로 인해
            방송 중에 나온 음악들은 제공되지 않는 점 양해 바랍니다. <br /> MBC
            라디오의 다시듣기와 팟캐스트 콘텐츠는 MBC의 사전 동의 없이 영리
            목적으로 사용되거나 재제공(링크제공 포함)될 수 없습니다
          </p>
        </div>

        <div className="play_box">
          <div>
            <img src={leftIcon} alt="" />
            <div className="play_button">
              <img src={playIcon} alt="" />
            </div>
            <img style={{ marginRight: "20px" }} src={rightIcon} alt="" />
          </div>
          <div className="text_box">
            {/* 윗줄 */}
            <div className="top">
              <h2>12/16(목) 별밤 초대석 with 송민호</h2>
              <p>2021-12-16</p>
              <div>
                <div>
                  <img src={soundIcon} alt="" />
                </div>
                <div>
                  <Slider
                    defaultValue={30}
                    trackStyle={{ backgroundColor: "#d0a048" }}
                    handleStyle={{ borderColor: "#d0a048" }}
                  />
                </div>
              </div>
            </div>
            {/* 아래줄 */}
            <div className="bottom">
              <div>00:15:00</div>
              <div>
                <Slider
                  trackStyle={{ backgroundColor: "#d0a048" }}
                  handleStyle={{ borderColor: "#d0a048" }}
                  defaultValue={30}
                />
              </div>
              <div>01:15:00</div>
            </div>
          </div>
        </div>

        <div className="replay_table">
          <Table columns={columns} showHeader={false} />
        </div>
      </div>
    </>
  );
}
export default Replay;
