import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blogs from "../Blog/Blogs";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <About></About>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
