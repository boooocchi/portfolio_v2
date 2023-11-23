import React from "react";
import { rubik } from "../../../font_family/font_family";

type SubtitleProps = {
  children: React.ReactNode;
};

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return (
    <h2
      className={`mb-1 md:mb-3 ${rubik.className} text-mainBlue  md:text-[1.1rem]`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
