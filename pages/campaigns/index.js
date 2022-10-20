import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import Navbar from "../../components/header/Navbar";
import styles from "./Campaigns.module.scss";

function index() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner />
        <div className={styles.mainContent}>
          <h1>Our Campaigns</h1>
        </div>
      </main>
    </React.Fragment>
  );
}

export default index;
