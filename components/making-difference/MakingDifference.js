import styles from "./MakingDifference.module.scss";

function MakingDifference() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>How we’re making a difference</h1>
        <div className={styles.contentWrapper}>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/raashan.png"} />
            </div>
            <p>
              We provide ration to the Economically Unwell families, Physically
              Disabled people, Surviving Spouse and Elderly.
            </p>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/edu.png"} />
            </div>
            <p>We aid poverty-sicken kids with education.</p>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/donate.png"} />
            </div>
            <p>We conduct regular Blood Donation Camps.</p>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <img src={"/images/plant.png"} />
            </div>
            <p>
              We also conduct a plantation drive in the city, villages and
              towns.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.gridContainer}>
          <img src='/images/group.png' alt="group"/>
        </div>
      </div>
    </section>
  );
}

export default MakingDifference;
