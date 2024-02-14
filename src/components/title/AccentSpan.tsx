import React from "react";
import { roboto } from "../../../font_family/font_family";

type AccentSpanProps = {
  children: React.ReactNode;
};

const AccentSpan: React.FC<AccentSpanProps> = ({ children }) => {
  return (
    <span
      className={`text-mainBlue font-bold lg:text-[1.1rem] sm:text-[1rem] text-[.8rem] drop-shadow-sm border-b-[3px] border-mainYellow ${roboto.className}`}
    >
      {children}
    </span>
  );
};

export default AccentSpan;
