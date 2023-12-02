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
  const smartPhone = useMediaQuery({
    query: "(max-width: 480px)"
  });
  let dottedOutlineBoxClassName =
    "flex flex-col  md:gap-5 outline-fontGray  md:min-h-[600px]  h-[650px] w-[90%] md:w-[84.5%] outline-dotted outline-[1px] sm:outline-[2px] lg:mt-[2rem] px-[1.3rem] xs:px-[2rem] md:px-[4rem] py-[2rem] md:py-[3rem] relative px-[1.5rem] py-[1.5rem]";
  if (lineColor === "mainBlack") {
    dottedOutlineBoxClassName =
      "flex flex-col  md:gap-5 outline-mainBlack  md:min-h-[600px]  h-[650px] w-[90%] md:w-[85%] outline-dotted outline-[1px] sm:outline-[2px] lg:mt-[2rem] px-[1.3rem] xs:px-[2rem] md:px-[4rem] py-[2rem] md:py-[3rem] relative px-[1.5rem] py-[1.5rem]";
  }
  return (
    <motion.div
      initial={
        !smartPhone && {
          opacity: 0,
          x: `${lineColor === "mainBlack" ? "-10%" : "10%"}`
        }
      }
      whileInView={{
        opacity: 1,
        x: "0%",
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }
      }}
      viewport={{ once: true, amount: 0.5 }}
      className={dottedOutlineBoxClassName}
    >
      {children}
    </motion.div>
  );
};

export default DottedOutlineBox;
