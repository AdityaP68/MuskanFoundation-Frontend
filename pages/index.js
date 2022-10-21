import React from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/header/Navbar";
import Landing from "../components/landing/Landing";
import Donation from "../components/donation/Donation";
import MakingDifference from "../components/making-difference/MakingDifference";
import Footer from "../components/footer/Footer";
import CommunitySupport from "../components/community-support/CommunitySupport";

function index() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Landing />
        <Donation />
        <MakingDifference />
        <div className={styles.filler}>
          <h1>#MakeADifference</h1>
        </div>
      </main>
      <CommunitySupport/>
      <Footer />
    </React.Fragment>
  );
}

export default index;
