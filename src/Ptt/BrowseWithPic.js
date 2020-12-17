import React from "react";
import BrowseWithPicItem from "./BrowseWithPicItem";

export default function BrowseWithPicList({ top3articlecontent }) {
  return (
    <div className="row justify-content-center">
      <div className="col-10 imgbrowse">
        <div className="articleImgs">
          {top3articlecontent.map((item, index) => {
            return (
              <BrowseWithPicItem
                key={index}
                imgs={item.img}
                link={item.url}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
