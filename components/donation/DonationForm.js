import styles from "./DonationForm.module.scss";

import React from "react";

function DonationForm() {
  return (
    <form className={styles.container} action="google.com" method="POST">
      <h2>Help Us Give the Power to Choose in a Child’s Hands</h2>
      <div className={styles.wrapper}>
        <ul className={styles.amtBox}>
          <li>
            <span>&#8377;</span>3600
          </li>
          <li>
            <span>&#8377;</span>10800
          </li>
          <li>
            <span>&#8377;</span>18000
          </li>
        </ul>
        <div className={styles.amtValWrapper}>
          <div className={styles.sign}>
            <span>&#8377;</span>
          </div>
          <input type="number" placeholder="Other Amount" />
        </div>

        <button type="submit">
          DONATE
          <img src={"/images/donate.svg"} />
        </button>
      </div>
    </form>
  );
}

export default DonationForm;
