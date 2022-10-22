import React from "react";
import styles from "./CommunitySupport.module.scss";

function CommunitySupport() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.heading}>
          <h2>Support Our Community</h2>
          <p>
            Too frequently, we undervalue the ability of a touch, a smile, a
            kind word, a listening ear, an open compliment, or the simplest act
            of kindness can change a life.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.img1}><img src="/images/gallery/4.jpeg" alt="img1"/></div>
          <div className={styles.img2}><img src="/images/gallery/7.jpeg" alt="img1"/></div>
        </div>
      </div>
      <div className={styles.right}>
        <div>
        <img src="/images/gallery/2.jpeg" alt="img1"/>
        </div>
      </div>
    </section>
  );
}

export default CommunitySupport;
