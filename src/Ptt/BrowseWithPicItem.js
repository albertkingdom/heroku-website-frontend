import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// function BrowseWithPicItem({ imgs, link, title }) {
//   return (
//     <>
//       {imgs.map((url) => {
//         return (
//           <div className="imgwrapper" key={url}>
//             <a
//               href={"https://" + url + ".jpg"}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img src={"https://" + url + ".jpg"} alt="img" />
//             </a>
//             <div className="btnforimg">
//               <a href={link} target="_blank" rel="noopener noreferrer">
//                 {title}
//               </a>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// }
function BrowseWithPicItem({ imgs, link, title, scrollPosition }) {
  return (
    <>
      {imgs.map((url) => {
        return (
          <div>
            <a
              href={"https://" + url + ".jpg"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LazyLoadImage
                key={url}
                alt="img"
                src={"https://" + url + ".jpg"}
                width="100px"
                height="300px"
                style={{ objectFit: "contain" }}
                scrollPosition={scrollPosition}
                // effect="blur"
              />
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
export default trackWindowScroll(BrowseWithPicItem);
