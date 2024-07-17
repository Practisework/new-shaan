import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImg from "../components/Home";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Contact from "../components/From";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BackgroundImg />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
