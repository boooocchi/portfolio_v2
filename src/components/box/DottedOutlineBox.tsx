import React from "react";

type dottedOutlineBoxProps = {
  children: React.ReactNode;
  lineColor?: string;
};
const DottedOutlineBox: React.FC<dottedOutlineBoxProps> = ({
  children,
  lineColor
}) => {
  let dottedOutlineBoxClassName =
    "flex flex-col  md:gap-5 outline-fontGray h-[85%] md:h-[82%]  w-[90%] md:w-[85%] outline-dashed md:mt-[2rem] px-[1.3rem] xs:px-[2rem] md:px-[4rem] py-[1rem] sm:py-[2rem] md:py-[3rem] relative px-[1.5rem] py-[1.5rem]";
  if (lineColor === "mainBlack") {
    dottedOutlineBoxClassName =
      "flex flex-col  md:gap-5 outline-mainBlack h-[85%] md:h-[82%]  w-[90%] md:w-[85%] outline-dashed md:mt-[2rem] px-[1.3rem] xs:px-[2rem] md:px-[4rem] py-[1rem] sm:py-[2rem] md:py-[3rem] relative px-[1.5rem] py-[1.5rem]";
  }
  return <div className={dottedOutlineBoxClassName}>{children}</div>;
};

export default DottedOutlineBox;
