import React from "react";
import Header from "./Header";
import VerticalLink from "./VerticalLink";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

const TabletLayout = () => {
  return (
    <div className="min-w-[375px]">
      <VerticalLink />
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default TabletLayout;
