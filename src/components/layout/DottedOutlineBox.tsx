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
  const isSm = useMediaQuery({
    query: "(max-width: 480px)"
  });
  const basicClass =
    "flex flex-col sm:h-[620px] h-[650px] w-[90%] sm:w-[85%] outline-dotted lg:mt-[2rem] outline-[2px] sm:py-[2.5rem] sm:px-[3.5rem] p-[1.3rem] relative ml-[10px]";

  let dottedOutlineBoxClassName = "outline-fontGray ";
  if (lineColor === "mainBlue") {
    dottedOutlineBoxClassName = "outline-mainBlue";
  }
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: `${isSm ? "0%" : lineColor === "mainBlue" ? "-5%" : "5%"}`,
          y: `${isSm && "5%"}`
        }}
        whileInView={{
          opacity: 1,
          x: "0%",
          y: "0%",
          transition: {
            duration: 0.3,
            stiffness: 100
          }
        }}
        viewport={{ once: true, amount: 0.4 }}
        className={`${dottedOutlineBoxClassName} ${basicClass}`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default DottedOutlineBox;
