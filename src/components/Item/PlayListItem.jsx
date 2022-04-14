// import axios from "axios";
import React, { useState } from "react";
import { DatePicker, Space, Select, Input, Table } from "antd";

import "./Common.scss";

const { Option } = Select;

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
    title: "조회수",
    dataIndex: "clickCount",
    key: "clickCount",
  },
];

const data = [
  {
    key: "1",
    date: "2022-04-13",
    clickCount: 32,
    title: "0415-선곡표모음",
  },
  {
    key: "2",
    date: "2022-04-13",
    clickCount: 32,
    title: "0414-선곡표모음",
  },
  {
    key: "3",
    date: "2022-04-13",
    clickCount: 32,
    title: "0413-선곡표모음",
  },
  {
    key: "4",
    date: "2022-04-13",
    clickCount: 32,
    title: "0412-선곡표모음",
  },
  {
    key: "5",
    date: "2022-04-13",
    clickCount: 32,
    title: "0411-선곡표모음",
  },
  {
    key: "6",
    date: "2022-04-13",
    clickCount: 32,
    title: "0410-선곡표모음",
  },
  {
    key: "7",
    date: "2022-04-13",
    clickCount: 32,
    title: "0409-선곡표모음",
  },
  {
    key: "8",
    date: "2022-04-13",
    clickCount: 32,
    title: "0408-선곡표모음",
  },
  {
    key: "9",
    date: "2022-04-13",
    clickCount: 32,
    title: "0407-선곡표모음",
  },
];

data.map((item) => {
  item.clickCount = Math.floor(Math.random() * 100);
  console.log(item.clickCount);
});

console.log(data);

function onChange(date, dateString) {
  console.log(date, dateString);
}

function ShowItem() {
  const [type, setType] = useState("defalt");
  return (
    <>
      <div>
        <div className="searchBox">
          <div>
            <h2>기간별 검색</h2>
            <Space>
              <DatePicker placeholder="" onChange={onChange} />
              -
              <DatePicker placeholder="" onChange={onChange} />
            </Space>
          </div>
          <div>
            <h2>분류별 검색</h2>
            <Space>
              <Select value={type} onChange={setType}>
                <Option value="defalt">선택</Option>
                <Option value="singer">가수</Option>
                <Option value="actor">연기자</Option>
                <Option value="news">시사</Option>
              </Select>
              <Input />
            </Space>
          </div>
          <div>
            <button>초기화</button>
            <button>검색</button>
          </div>
        </div>
        <div className="listBox">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
}
export default ShowItem;
