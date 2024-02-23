import React from "react";
import { rubik } from "../../../font_family/font_family";

type sectionTitleProps = {
  children: React.ReactNode;
  color: string;
};
const SectionTitle: React.FC<sectionTitleProps> = ({ children, color }) => {
  return (
    <h2
      className={`${rubik.className} tracking-tighter leadin-[1.2] text-${color} md:text-[2.5rem] sm:text-[1.8rem]  text-[1.6rem] drop-shadow-lg} `}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
