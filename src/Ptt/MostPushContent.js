import React from "react";

export default function MostPushContent({ topContentData }) {
  return (
    <div className="row justify-content-center">
      <div className="col-10  top4">
        {topContentData.slice(0, 4).map((item) => (
          <div className="d-flex px-3" key={item.titleText}>
            <span>{item.count}</span>
            <div className="flex-grow-1">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.titleText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
