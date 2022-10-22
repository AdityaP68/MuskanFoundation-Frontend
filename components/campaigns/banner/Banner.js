import Image from "next/image";
import React from "react";
import styles from "./Banner.module.scss";

function Banner({ path }) {
  return (
    <section className={styles.container}>
      <img src={path} alt="banner" />
      <div className={styles.padding}>
        <h1>Muskan - Non-Governmental Organisation, Bhilwara</h1>
      </div>
    </section>
  );
}

export default Banner;
