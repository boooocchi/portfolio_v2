import React from "react";

import DottedOutlineBox from "./box/DottedOutlineBox";
import Section from "./box/Section";

import { roboto, rubik } from "../../font_family/font_family";
import SectionTitle from "./title/SectionTitle";
import Subtitle from "./title/Subtitle";

import AccentSpan from "./title/AccentSpan";

import {
  databaseSvgs,
  frameworkLibrarySvgs,
  languageSvgs
} from "../../public/icons/svgs";
import IconList from "./iconsList/IconList";

const Skills = () => {
  return (
    <Section bgColor="mainYellow" id="skills">
      <DottedOutlineBox lineColor="mainBlack">
        <SectionTitle color="mainBlue">My Skills</SectionTitle>
        <div className="grid grid-cols-2 gap-x-[10%] w-full mt-5 mb-10">
          <div className="w-full">
            <Subtitle>+ Language</Subtitle>
            <div>
              <ul className="flex gap-x-10 gap-y-5 flex-wrap">
                {languageSvgs.map((svg, index) => {
                  return (
                    <IconList
                      key={index}
                      xmlns={svg.xmlns}
                      fill={svg.fill}
                      viewBox={svg.viewBox}
                      name={svg.name}
                      path={svg.path}
                    ></IconList>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <Subtitle>+ Database</Subtitle>
            <div>
              <ul className="flex gap-x-10 gap-y-5 flex-wrap">
                {databaseSvgs.map((svg, index) => {
                  return (
                    <IconList
                      key={index}
                      xmlns={svg.xmlns}
                      fill={svg.fill}
                      viewBox={svg.viewBox}
                      name={svg.name}
                      path={svg.path}
                    ></IconList>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <Subtitle>+ Framework/Library</Subtitle>
          <div>
            <ul className="flex gap-x-10 gap-y-5 flex-wrap">
              {frameworkLibrarySvgs.map((svg, index) => {
                return (
                  <IconList
                    key={index}
                    xmlns={svg.xmlns}
                    fill={svg.fill}
                    viewBox={svg.viewBox}
                    name={svg.name}
                    path={svg.path}
                    path2={svg.path2}
                    path3={svg.path3}
                  ></IconList>
                );
              })}
            </ul>
          </div>
        </div>
      </DottedOutlineBox>
    </Section>
  );
};

export default Skills;
