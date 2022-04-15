import { Table, Slider } from "antd";
import React, { useEffect, useState } from "react";
import rightIcon from "assets/10-16.svg";
import leftIcon from "assets/11-12.svg";
import playIcon from "assets/invalid-name@3x.jpg";
import soundIcon from "assets/21-3.svg";
import popupIcon from "assets/22-2.svg";

import axios from "axios";

//
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
    width: "40%",
  },
  {
    title: "길이",
    dataIndex: "count",
    key: "count",
  },
];

//경고창
function err() {
  alert("서비스를 준비중입니다.");
}

function Replay() {
  //기본 데이터 상태설정
  const [data, setData] = useState({
    tableData: [],
    totalCount: 0,
  });
  const [page, updatePage] = useState({
    current: 1,
    total: 0,
  });
  const [loading, setLoaing] = useState(false);

  //화면 접근과 동시에 실행
  useEffect(() => {
    getData();
  }, [page.current]);

  //데이터 가져오기
  async function getData() {
    setLoaing(true);

    //정보설정
    const params = {
      page: page.current,
      perPage: 10,
      serviceKey: process.env.REACT_APP_URD_KEY,
    };

    await axios
      .get(
        "https://api.odcloud.kr/api/15071046/v1/uddi:abe42915-3cb5-477d-8d53-b7430e5567f0",
        { params }
      )
      .then((res) => {
        let list = [];
        res.data.data.map((item, index) => {
          let table = {
            date: "2022-04-13",
            title: item.아티스트명 + "-" + item.앨범명,
            count: item.제작사명,
            key: index,
          };
          list.push(table);
        });

        //상태변경
        setData({
          tableData: [...list],
          totalCount: res.data.totalCount,
        });
        updatePage({
          current: res.data.page,
          total: res.data.totalCount,
        });

        setLoaing(false);
      });
  }

  //페이징처리될경우
  function setPage(pagination) {
    updatePage((prevState) => {
      return {
        ...prevState,
        current: pagination.current,
      };
    });
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
          <Table
            columns={columns}
            showHeader={false}
            dataSource={data.tableData}
            pagination={page}
            onChange={setPage}
            loading={loading}
          />
        </div>
      </div>
    </>
  );
}
export default Replay;
