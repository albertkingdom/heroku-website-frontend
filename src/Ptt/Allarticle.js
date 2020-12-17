import React, { useState } from "react";
import { Select } from "antd";

export default function Allarticle({ pttTitle }) {
  const { Option } = Select;
  const [count, setCount] = useState(0);
  const [sortMethod, setSortMethod] = useState("0");
  function handleChange(value) {
    setCount(value);
  }
  //調整排序
  function handleSort(value) {
    setSortMethod(value);
  }
  const gossipContent = () => {
    switch (sortMethod) {
      case "1": {
        let tempContent = [...pttTitle].sort(function (a, b) {
          return b.count - a.count;
        });
        return tempContent
          .filter((item) => +item.count >= count)
          .map((item) => (
            <div key={item.link} className="ptt-title col-11 col-md-5">
              <p className="ptt-count">{item.count}</p>
              <a href={item.link}>{item.titleText}</a>
            </div>
          ));
      }
      case "2": {
        let tempContent = [...pttTitle].sort(function (a, b) {
          return a.count - b.count;
        });
        return tempContent
          .filter((item) => +item.count >= count)
          .map((item) => (
            <div key={item.link} className="ptt-title col-11 col-md-5">
              <p className="ptt-count">{item.count}</p>
              <a href={item.link}>{item.titleText}</a>
            </div>
          ));
      }

      default: {
        return pttTitle
          .filter((item) => +item.count >= count)
          .map((item) => (
            <div key={item.link} className="ptt-title col-11 col-md-5">
              <p className="ptt-count">{item.count}</p>
              <a href={item.link}>{item.titleText}</a>
            </div>
          ));
      }
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-around flex-wrap my-3">
        <p
          className="col-11 col-lg-3 my-2"
          style={{ fontSize: "20px", margin: "0" }}
        >
          目前顯示{pttTitle.length}篇文章
        </p>
        <Select
          className="col-11 col-lg-3 my-2"
          defaultValue="推文數篩選"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <Option value="10">&gt;10</Option>
          <Option value="20">&gt;20</Option>
          <Option value="0">0</Option>
        </Select>
        <Select
          className="col-11 col-lg-3 my-2"
          defaultValue="排序方式"
          style={{ width: 200 }}
          onChange={handleSort}
        >
          <Option value="1">最多推</Option>
          <Option value="2">最多噓</Option>
          <Option value="0">預設</Option>
        </Select>
      </div>
      <div className="row justify-content-center">
        <div className="d-flex flex-wrap justify-content-around allarticle col-11">
          {gossipContent()}
        </div>
      </div>
    </div>
  );
}
