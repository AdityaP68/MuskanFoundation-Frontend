import styles from "./Donation.module.scss";
import DonationForm from "./DonationForm";

function Donation() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <img src={"/images/form.png"} />
      </div>
      <div className={styles.right}>
        <DonationForm />
      </div>
    </section>
  );
}

export default Donation;
