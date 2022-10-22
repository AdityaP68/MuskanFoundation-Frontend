import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import styles from "./Gallery.module.scss";

const url = []

function Gallery() {
  return (
    <React.Fragment>
      <Navbar />
      <main
        className={styles.main}
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          background: "lightgray",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <h2 style={{}}>Yet to upload any pictures/videos</h2>
        </div>
        
      </main> 
      <Footer />
    </React.Fragment>
  );
}

export default Gallery;
