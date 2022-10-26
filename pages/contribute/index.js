import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import Navbar from "../../components/header/Navbar";
import styles from "./Contribute.module.scss";

function Contribute() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner path="/images/landing5.png" heading={"Dreams Have No Boundaries"} page="contribute"/>
        <div className={styles.joinUs}>
          <div className={styles.items}>
            <div className={styles.heading}>
              <h2>Educational Growth</h2>
              <button>Donate Now</button>
            </div>
          </div>
          <div className={styles.items}>
          <div className={styles.heading}>
              <h2>Blood Donation Camps</h2>
              <button>Donate Now</button>
            </div>
          </div>
          <div className={styles.items}>
          <div className={styles.heading}>
              <h2>Ration Bags</h2>
              <button>Donate Now</button>
            </div>
          </div>
        </div>
        
        <section className={styles.mainWrapper}>
          
        </section>

      </main>
    </React.Fragment>
  );
}

export default Contribute;
