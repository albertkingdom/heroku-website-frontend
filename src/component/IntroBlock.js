import React from "react";

const IntroBlock = ({ title, intro, imgurl, linkurl }) => {
  return (
    <>
      <div className="intro col-md-2 col-10">
        <div className="img-wrapper">
          <img src={imgurl} alt={title}></img>
        </div>
        <h4>
          <a href={linkurl}>{title}</a>
        </h4>
        <p>{intro}</p>
        <a href={linkurl}>看更多</a>
      </div>
    </>
  );
};
export default IntroBlock;
