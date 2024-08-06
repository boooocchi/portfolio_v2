import { motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "react-responsive";

type dottedOutlineBoxProps = {
  children: React.ReactNode;
  lineColor?: string;
};
const DottedOutlineBox: React.FC<dottedOutlineBoxProps> = ({
  children,
  lineColor
}) => {
  const basicClass =
    "flex flex-col sm:h-[620px] h-[650px] w-[90%] sm:w-[85%] outline-dotted lg:mt-[2rem] outline-[2px] sm:py-[2.5rem] sm:px-[3.5rem] p-[1.3rem] relative";

  let dottedOutlineBoxClassName = "outline-fontGray ";
  if (lineColor === "mainBlue") {
    dottedOutlineBoxClassName = "outline-mainBlue";
  }
  return (
    <>
      <motion.div className={`${dottedOutlineBoxClassName} ${basicClass}`}>
        {children}
      </motion.div>
    </>
  );
};

export default DottedOutlineBox;
