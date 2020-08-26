import React, { useEffect } from "react";
import styles from "./TabStructure.scss";

function TabStructure({ mostpush, browseWithPics, allArticle }) {
  useEffect(() => {
    const tab1btn = document.querySelector("#tab1btn");
    const tab2btn = document.querySelector("#tab2btn");
    const tab3btn = document.querySelector("#tab3btn");
    const tab1content = document.querySelector("#tab1");
    const tab2content = document.querySelector("#tab2");
    const tab3content = document.querySelector("#tab3");
    function removeActive() {
      document
        .querySelectorAll("div.tab")
        .forEach((item) => item.classList.remove("active"));
      document
        .querySelectorAll("li.active")
        .forEach((item) => item.classList.remove("active"));
    }
    tab1btn.addEventListener("click", function () {
      removeActive();
      tab1content.classList.add("active");
      tab1btn.classList.add("active");
    });
    tab2btn.addEventListener("click", function () {
      removeActive();
      tab2content.classList.add("active");
      tab2btn.classList.add("active");
    });
    tab3btn.addEventListener("click", function () {
      removeActive();
      tab3content.classList.add("active");
      tab3btn.classList.add("active");
    });
  });
  return (
    <>
      <ul className="tabControlBtn">
        <li id="tab1btn" className="active">
          最多推文
        </li>
        <li id="tab2btn">圖文瀏覽</li>
        <li id="tab3btn">所有文章</li>
      </ul>

      <div className="tab active" id="tab1">
        {mostpush}
      </div>
      <div className="tab" id="tab2">
        {browseWithPics}
      </div>
      <div className="tab" id="tab3">
        {allArticle}
      </div>
    </>
  );
}

export default TabStructure;
