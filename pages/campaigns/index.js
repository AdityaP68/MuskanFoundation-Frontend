import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import CampaignList from "../../components/campaigns/campaign-list/CampaignList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./Campaigns.module.scss";

function index() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner />
        <div className={styles.mainContent}>
          <div className={styles.heading}>
            <h1>Our Campaigns</h1>
            <p>
              We strive to enhance community welfare. We work to find
              <br /> solutions to a variety of societal issues.
              <br /> We have 11 on-going projects :-
            </p>
          </div>
          <section className={styles.campaignList}>
            <CampaignList
              title={"Raation Bag Project -"}
              content={
                "Provide Ration Bags to the impoverished people, physically disable people, surviving spouse and elderly who cannot afford the proper and nutritious food."
              }
            />
            <CampaignList
              title={"Yeh Parivar Mera Parivar - "}
              content={
                "We provide the basic need of the people, that is, Education for impoverished students, healthcare for edlerly, etc."
              }
            />
            <CampaignList
              title={"Vidhya Param Balam -"}
              content={
                " We provide the stationary stuffs in the government schools of the villages towns. "
              }
            />
            <CampaignList
              title={"Share your happiness Programme -"}
              content={
                "To create awareness to donate on birthdays, anniversaries and other occasion to spread happiness."
              }
            />
            <CampaignList
              title={"Vrkshaaropan -"}
              content={
                "We also conduct plantation drives in the city, villages and towns."
              }
            />
            <CampaignList
              title={"Winter Project -"}
              content={
                "Provide the woollen clothes to impoverished families in winter. They have distributed 600 sweaters to children."
              }
            />
            <CampaignList
              title={"Bird House Project -"}
              content={
                "We create awareness why birds are important and making a shelter for them as well as arranging food and water in that shelter."
              }
            />
            <CampaignList
              title={"Diwali Dil Wali -"}
              content={
                "We Provide fireworks, new clothes and sweets to the poor in Diwali."
              }
            />
            <CampaignList
              title={"Chara Vitaran -"}
              content={"Arranging grass and making shelter for the cows."}
            />
            <CampaignList
              title={"Tulsi evan parinda Vitaran - "}
              content={
                "To raise awareness of tulsi’s advantages and the ways in which gives humans the nuterients they need."
              }
            />
          </section>
        </div>
      </main>
      <Footer/>
      
    </React.Fragment>
  );
}

export default index;
