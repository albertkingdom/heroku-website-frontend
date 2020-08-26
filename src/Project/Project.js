import React from "react";
import "./project.scss";

const Project = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center">資策會結業專題</h3>
        <h5 className="text-center">
          <i>Tandom遊戲社群分享平台</i>
        </h5>
        <hr />
        <div className="d-flex flex-wrap project_img">
          <img
            className="col-11 col-md-6"
            src="./iii/product_list.png"
            alt="screenshot-product-list"
          />
          <div>
            商品列表頁
            <ol>
              <li>加入購物車、加入收藏功能</li>

              <li>關鍵字搜尋、多重條件綜合篩選、排序功能</li>
            </ol>
          </div>
        </div>
        <div className="d-flex project_img">
          <img
            className="col-11 col-md-6"
            src="./iii/product_detail.png"
            alt="screenshot-product-page"
          />
          <div>
            商品頁
            <ol>
              <li>加入購物車、加入收藏功能</li>

              <li>留言、回覆留言</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
