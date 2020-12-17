import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import AllArticle from "./Allarticle";
import BrowseWithPic from "./BrowseWithPic";
import MostPushContent from "./MostPushContent";
import Loading from "./Loading";
import styles from "./TabStructure.module.scss";
import "./ptt.scss";

const Ptt = (props) => {
  const [pttTitle, setPttTitle] = useState([]); //所有文章
  const [top3articlecontent, setTop3articlecontent] = useState([]); //圖文瀏覽
  const [content, setContent] = useState(0); //0:loading,1:MostPushContent,2:BrowseWithPic, 3:AllArticle
  useEffect(() => {
    //top3articlecontent 拿到資料後就顯示
    if (top3articlecontent.length > 0) {
      setContent(2);
    }
  }, [top3articlecontent]);
  useEffect(() => {
    fetch("https://ptt-todolist-api.herokuapp.com/getptt", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const noundefinedurl = data.filter(
          (url) => !url.link.match(/undefined/gm)
        ); //去掉被刪除文章，網址undefined
        for (let i = 0; i < noundefinedurl.length; i++) {
          noundefinedurl[i].count = noundefinedurl[i].count.replace(/X/gm, "-");
          noundefinedurl[i].count = noundefinedurl[i].count.replace(
            /爆/gm,
            "100"
          );
          // console.log(noundefinedurl[i].count);
        }

        setPttTitle(noundefinedurl);
        return noundefinedurl;
      })
      .then((noundefinedurl) => {
        const sortdata = [...noundefinedurl].sort(function (a, b) {
          return b.count - a.count;
        });

        fetchtopcontent(sortdata);
      });
  }, []);

  // 照推文數排序熱門文章
  const topContentData = [...pttTitle].sort(function (a, b) {
    return b.count - a.count;
  });
  // console.log("topContentData", topContentData);
  //fetch 熱門文章的內容
  function fetchtopcontent(urls) {
    // const noundefinedurl = urls.filter(url=>!url.link.match(/undefined/gm))//去掉被刪除文章，網址undefined

    const url = urls.map((item) => item.link);

    let body = { url: url };

    fetch("https://ptt-todolist-api.herokuapp.com/getptt/top3", {
      method: "post",
      body: JSON.stringify(body),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTop3articlecontent(data);
      });
  }

  return (
    <div className="container">
      <ul className={styles.tabControlBtn}>
        <li
          id="tab1btn"
          className={content === 1 ? styles.active : null}
          onClick={() => setContent(1)}
        >
          最多推文
        </li>
        <li
          id="tab2btn"
          className={content === 2 ? styles.active : null}
          onClick={() => setContent(2)}
        >
          圖文瀏覽
        </li>
        <li
          id="tab3btn"
          className={content === 3 ? styles.active : null}
          onClick={() => setContent(3)}
        >
          所有文章
        </li>
      </ul>

      <div className={content === 0 ? styles.active : "d-none"}>
        <Loading />
      </div>
      <div className={content === 1 ? styles.active : "d-none"}>
        {<MostPushContent topContentData={topContentData} />}
      </div>
      <div className={content === 2 ? styles.active : "d-none"}>
        {<BrowseWithPic top3articlecontent={top3articlecontent} />}
      </div>
      <div className={content === 3 ? styles.active : "d-none"}>
        {<AllArticle pttTitle={pttTitle} />}
      </div>
    </div>
  );
};

export default withRouter(Ptt);
