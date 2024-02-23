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

  const basicClass =
    "flex flex-col sm:h-[620px]  h-[650px] w-[90%] sm:w-[85%] sm:outline-dotted  lg:mt-[2rem] sm:outline-[2px] sm:py-[2.5rem] sm:px-[3rem] py-[1.3rem]  px-[1.3rem] relative ";

  let dottedOutlineBoxClassName = "outline-fontGray ";
  if (lineColor === "mainBlue") {
    dottedOutlineBoxClassName = "outline-mainBlue";
  }
  return (
    <>
      {!smartPhone ? (
        <motion.div
          initial={{
            opacity: 0,
            x: `${lineColor === "mainBlue" ? "-10%" : "10%"}`
          }}
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
          className={`${dottedOutlineBoxClassName} ${basicClass}`}
        >
          {children}
        </motion.div>
      ) : (
        <div className={`${dottedOutlineBoxClassName} ${basicClass}`}>
          {children}
        </div>
      )}
    </>
  );
};

export default DottedOutlineBox;
