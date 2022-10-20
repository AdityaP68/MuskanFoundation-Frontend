import React from "react";
import styles from "./CampaignList.module.scss";

function CampaignList({ title, content }) {
  return (
    <div className={styles.container}>
      <p>
        @ <span>{title}</span>
        {content}
      </p>
    </div>
  );
}

export default CampaignList;
