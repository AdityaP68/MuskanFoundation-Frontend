import styles from "./Footer.module.scss";

import React from "react";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.topRow}>
        <img src={"/images/logo.png"} />
        <div className={styles.quickLinks}>
          <div className={styles.item}>
            <span>Join Us</span>
            <li>8HJW+785, Bhilwara Rd, Patel Nagar<br/> Bhilwara, Rajasthan - 311001</li>
            <li></li>
            
            
          </div>
          <div className={styles.item}>
            <span>Contact Us</span>
            <li>8HJW+785, Bhilwara Rd, Patel Nagar<br/> Bhilwara, Rajasthan - 311001</li>
            <li></li>
           
          </div>
          <div className={styles.item}>
            <span>Postal Address</span>
            <li>8HJW+785, Bhilwara Rd, Patel Nagar<br/> Bhilwara, Rajasthan - 311001</li>
            {/* <li></li>
            <li></li> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
