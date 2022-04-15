import React, { useState } from "react";
import { Table } from "antd";
import kadvice from "kadvice";

const advices = kadvice.get();

const columns = [
  {
    title: "번호",
    dataIndex: "number",
    key: "number",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "제목",
    dataIndex: "title",
    key: "title",
    width: "60%",
  },
  {
    title: "작성자",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "작성일",
    dataIndex: "date",
    key: "date",
  },
];

const data = [];
let i = 1;
advices.map((item) => {
  let table = {
    number: Math.floor(Math.random() * 1000),
    key: i++,
    title: item.message,
    user: item.author,
    date: "2022-04-13",
  };
  data.push(table);
});

function LetterItem({ subTitle }) {
  const [visible, setVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 14 },
  };

  return (
    <>
      <div>
        <div className="TopBtnWrap">
          <button className="rule">
            <img
              src="https://jj2084jj.github.io/radioWeb/img-icon-rule.jpg"
              alt="rule"
            />
            게시판 운영 원칙
          </button>
          <button className="write" onClick={() => setVisible(true)}>
            <img
              src="https://jj2084jj.github.io/radioWeb/img-icon-write.png"
              alt="write"
            />
            글쓰기
          </button>
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
      </div>
      <div className="listBox" style={{ marginTop: "20px" }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}
export default LetterItem;
