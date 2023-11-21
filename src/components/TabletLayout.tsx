import React from "react";
import Header from "./Header";
import VerticalLink from "./VerticalLink";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

const TabletLayout = () => {
  return (
    <div>
      <VerticalLink />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default TabletLayout;
