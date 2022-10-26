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
        <Banner path="/images/campaign4.png" heading={"Muskan - Non-Governmental Organisation, Bhilwara"} />
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
                title={"Ration Bag Project -"}
                content={
                  "Food is the moral right of all who are born into this world. There are people in the world so hungry, that nothing except bread can help them. We provide the Ration Bags to those in need through this drive. This enables underprivileged families to endure difficult times."
                }
              />
            <CampaignList
              title={"Yeh Parivar Mera Parivar - "}
              content={
                "In this effort, we encourage the ration bag campaign donors to adopt one of the household and supply them with ration bags for one month. This aids in the distribution of not just ration bags but also mattresses, almirahs, fans, clothes, as well as the healthcare of elderly and education of the children, allowing a poor family to live in peacefully and respectfully in the society."
              }
            />
            <CampaignList
              title={"Blood Donation Camp -"}
              content={
                "Blood Donation is a Voluntary procedure that can help save lives. Blood donation camps have been organised, which aid in the collection of all blood types. Here, in Muskan we regularly arrange these types of donation camps, and all donated blood is subsequently sent to the city's blood bank."
              }
            />
            <CampaignList
              title={"Vidhya Param Balam -"}
              content={
                " The greatest prospects for personal fulfilment are offered by education. It gives one access to everything they still have to learn. So it stands to reason that offering education is seen as the best gift. During this drive, we donate stationary items, winter clothing made of wool, and contribute to the repairment  for government schools in rural and urban areas."
              }
            />
            <CampaignList
              title={"Share your happiness Programme -"}
              content={
                "as there is a saying, Happiness grows by sharing. so we motivate other people to implement this quote by celebrating their special days like Birthdays, Anniversaries, etc with the students of government school by providing eatables, stationaries or arrange fodder for cow in Gaushala, or providing some ration bags to impoverished people in slums and share their happiness. "
              }
            />
            <CampaignList
              title={"Vrkshaaropan -"}
              content={
                "We also conduct plantation drives in the city, villages and towns."
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
              content={"In India, cows are revered as a symbol of Mother Earth since they are a source of kindness and their milk nourishes all living things. Through this campaign, we provide various forms of fodder, including green, dry, mixed, and so on. We also strive to contribute to the construction of the Gaushala."}
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
