import React from "react";
import styles from "./Test.module.scss";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function index() {
  const url = [];

  for (let i = 1; i < 34; i++) {
    url.push({
      src: `/images/gallery/${i}.jpeg`,
    });
  }
  console.log(url);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
      <Masonry>
        {url.map((src, idx) => {
          return <img src={src.src} key={idx} className={styles.container} />;
        })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default index;
