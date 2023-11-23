import React from "react";

import DottedOutlineBox from "./box/DottedOutlineBox";
import Section from "./box/Section";

import { roboto, rubik } from "../../font_family/font_family";
import SectionTitle from "./title/SectionTitle";

import AccentSpan from "./title/AccentSpan";

const About = () => {
  return (
    <Section bgColor="mainBlue" id="about">
      <DottedOutlineBox lineColor="fontGray">
        <div>
          <SectionTitle color="mainYellow">ABOUT ME</SectionTitle>
          <p
            className={`${roboto.className} mt-0 lg:mt-3 md:mb-8 mb-6 leading-[1.2rem]  sm:leading-6 text-fontGray lg:text-[1.1rem] sm:text-[1rem] text-[.8rem]`}
          >
            Highly motivated frontend web developer with strong focus on{" "}
            <AccentSpan>React</AccentSpan> and{" "}
            <AccentSpan>Typescript</AccentSpan>
            . <br /> Excels at problem-solving and working collaboratively in a
            team environment. <br />I am also always{" "}
            <AccentSpan>open to new technologies</AccentSpan>
            !!
          </p>
          <SectionTitle color="mainYellow">A little story</SectionTitle>
          <p
            className={`${roboto.className} leading-[1.2rem] lg:text-[1.1rem]  sm:leading-6 sm:text-[1rem] text-[.8rem] mt-0  lg:mt-3 mb-5 text-fontGray`}
          >
            Prior to my foray into the world of web development, <br />I worked
            as a <AccentSpan>Japanese salesman</AccentSpan> for an old incense
            company in Kyoto, Japan. <br /> (I barely used my laptop back
            then...) <br /> However, my fascination with website creation
            prompted me <br />
            to step out of my comfort zone and develop my first blog site in
            2022. <br /> This experience ultimately led me to Canada, where I am
            now, pursuing my passion for coding.
          </p>
        </div>
      </DottedOutlineBox>
    </Section>
  );
};

export default About;
