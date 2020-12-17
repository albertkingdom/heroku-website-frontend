import React from "react";

export default function BrowseWithPicItem({ imgs, link, title }) {
  return (
    <>
      {imgs.map((url) => {
        return (
          <div className="imgwrapper" key={url}>
            <a
              href={"https://" + url + ".jpg"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"https://" + url + ".jpg"} alt="img" />
            </a>
            <div className="btnforimg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
