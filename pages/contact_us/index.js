import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import ContactForm from "../../components/contact-us/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import Location from "../../components/map/Map";
import styles from "./ContactUs.module.scss";

function ContactUs() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner path={"/images/campaign2.png"} />
        <section className={styles.mainContainer}>
          <h2>
            If you would like to join us in our mission to change the lives of
            children, kindly write to us.
          </h2>
          <div className={styles.credentialsList}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/map.png"} alt="icon" />
              </div>
              <a href="https://www.google.com/maps/place/MUSKAN+INDIA/@25.3313929,74.5973714,15.27z/data=!4m12!1m6!3m5!1s0x0:0x13e52eeb0cdd76fd!2sMUSKAN+INDIA!8m2!3d25.3306516!4d74.5959083!3m4!1s0x0:0x13e52eeb0cdd76fd!8m2!3d25.3306516!4d74.5959083">
                <p>Muskan India</p>
              </a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/call.png"} alt="icon" />
              </div>
              <a href ="tel:+91-9983347711">+91-9983347711</a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/mail.png"} alt="icon" />
              </div>
              <a href="mailto:mFoundation17@gmail.com"><p>mFoundation17@gmail.com</p></a>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/insta.png"} alt="icon" />
              </div>
              <a href="https://www.instagram.com/muskan_ek_umeed/?igshid=YmMyMTA2M2Y%3D">
                muskan_ek_umeed
              </a>
            </div>
            {/* <div className={styles.item}>
              <div className={styles.icon}>
                <img src={"/images/linkedin.png"} alt="icon" />
              </div>
              <p>RandomText@gmail.com</p>
            </div> */}
          </div>
        </section>
        <section className={styles.map}>
          <Location/>
         
        </section>
        <section className={styles.contactForm}>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;
