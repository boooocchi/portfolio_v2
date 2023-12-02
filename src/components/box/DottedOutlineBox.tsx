import { motion } from "framer-motion";
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
    "flex flex-col  md:gap-5 outline-fontGray  md:min-h-[600px]  h-[650px] w-[90%] md:w-[84.5%] outline-dotted outline-[1px] sm:outline-[2px] lg:mt-[2rem] px-[1.3rem] xs:px-[2rem] md:px-[4rem] py-[2rem] md:py-[3rem] relative px-[1.5rem] py-[1.5rem]";
  if (lineColor === "mainBlack") {
    dottedOutlineBoxClassName =
      "flex flex-col  md:gap-5 outline-mainBlack  md:min-h-[600px]  h-[650px] w-[90%] md:w-[85%] outline-dotted outline-[1px] sm:outline-[2px] lg:mt-[2rem] px-[1.3rem] xs:px-[2rem] md:px-[4rem] py-[2rem] md:py-[3rem] relative px-[1.5rem] py-[1.5rem]";
  }
  return (
    <motion.div
      initial={{
        opacity: 0.1,
        y: "15%"
      }}
      whileInView={{
        opacity: 1,
        y: "0%",
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
      className={dottedOutlineBoxClassName}
    >
      {children}
    </motion.div>
  );
};

export default DottedOutlineBox;
