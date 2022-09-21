import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/header/Navbar";
import Landing from "../components/landing/Landing";
import Donation from "../components/donation/Donation";

function index() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Landing/>
        <Donation/>
        
      </main>
    </React.Fragment>
  );
}

export default index;
