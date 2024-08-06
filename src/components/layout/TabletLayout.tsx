import React from "react";
import Header from "./Header";
import VerticalLink from "../VerticalLink";
import Hero from "../section/Hero";
import AboutMe from "../section/AboutMe";
import Skill from "../section/Skill";
import Project from "../section/Project";
import Contact from "../section/Contact";

const TabletLayout = () => {
  return (
    <div className="min-w-[375px]">
      <VerticalLink />
      <Header />
      <Hero />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default TabletLayout;
