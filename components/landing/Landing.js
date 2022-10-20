import styles from "./Landing.module.scss";

function Landing() {
  return (
    <section className={styles.container}>
      <div className={styles.start}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <h1>
              The charity that is a trifle to us can be precious to others
            </h1>
            <div className={styles.filler}>
              <p>we work to improve the welfare of the community</p>
              <div className={styles.box}></div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={"/images/child1.png"} />
        </div>
      </div>
      <div className={styles.end}>
        <img src={"./images/landing-end.svg"} />
      </div>
    </section>
  );
}

export default Landing;
