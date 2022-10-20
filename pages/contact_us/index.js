import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import ContactForm from "../../components/contact-us/contact-form/ContactForm";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./ContactUs.module.scss";

function ContactUs() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner path={"/images/campaign2.png"} />
        <section className={styles.mainContainer}> 
            <h2>
            If you would like to join us in our mission to change the lives of children, kindly write to us.
            </h2>
            <div className={styles.credentialsList}>
                <div className ={styles.item}>
                    <div className={styles.icon}><img src={'/images/map.png'} alt ="icon"/></div>
                    <p>RandomText@gmail.com</p>
                </div>
                <div className ={styles.item}>
                    <div className={styles.icon}><img src={'/images/call.png'} alt ="icon"/></div>
                    <p>RandomText@gmail.com</p>
                </div>
                <div className ={styles.item}>
                    <div className={styles.icon}><img src={'/images/mail.png'} alt ="icon"/></div>
                    <p>RandomText@gmail.com</p>
                </div>
                <div className ={styles.item}>
                    <div className={styles.icon}><img src={'/images/insta.png'} alt ="icon"/></div>
                    <p>RandomText@gmail.com</p>
                </div>
                <div className ={styles.item}>
                    <div className={styles.icon}><img src={'/images/linkedin.png'} alt ="icon"/></div>
                    <p>RandomText@gmail.com</p>
                </div>
            </div>
        </section>
        <section className={styles.map}>
            <img src="/images/map2.png" alt="map"/>
        </section>
        <section className={styles.contactForm}>
            <ContactForm/>

        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default ContactUs;
