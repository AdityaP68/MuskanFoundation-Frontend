import React from "react";
import Banner from "../../components/campaigns/banner/Banner";
import CampaignList from "../../components/campaigns/campaign-list/CampaignList";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./Campaigns.module.scss";

function Campaigns() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Banner path="/images/campaign4.png" />
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
              title={"Winter Project -"}
              content={
                "Rajasthan endures bone-chillingly cold temperatures and near-zero temperature cold conditions every year. Elderly people and little children have an extremely tough time surviving in these extreme cold conditions. In this campaign, we distribute woollen clothing and blankets to them, which assist them withstand these terrible weather. With everyone's help, we have distributed 600 sweaters among the unprivileged ones."
              }
              hotBanner = "true"
            />
            <CampaignList
              title={"Diwali Dil Wali -"}
              content={
                "Diwali, this festival is a very auspicious occasion that is celebrated with much fervour, cheer and joy.Everyone likes to dress in new clothes, exchange sweets, and eat healthy meals. However, the poor are unable to obtain it. This campaign aims to put a smile on these families' faces  by  giving kids new clothes, sweets, and ration bags so they can celebrate with their family. and it enables them to take full happiness and joy in the celebration. Today, we won 90 smiles from the families in 2022, bringing the total to 1270 smiles."
              }
              hotBanner = "true"
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
              title={"Raation Bag Project -"}
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
      <Footer />
    </React.Fragment>
  );
}

export default Campaigns;
