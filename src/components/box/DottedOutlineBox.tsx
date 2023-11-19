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
    "flex flex-col gap-5 outline-fontGray h-[82%]  w-[85%] outline-dashed mt-[2rem]  px-[4rem] py-[3rem] relative";
  if (lineColor === "mainBlack") {
    dottedOutlineBoxClassName =
      "flex flex-col gap-5 outline-mainBlack h-[82%]  w-[85%] outline-dashed mt-[2rem]  px-[4rem] py-[3rem] relative";
  }
  return <div className={dottedOutlineBoxClassName}>{children}</div>;
};

export default DottedOutlineBox;
