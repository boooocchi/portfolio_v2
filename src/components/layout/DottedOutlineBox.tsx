import { domAnimation, LazyMotion, m } from "framer-motion";
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
    "flex flex-col sm:h-[620px] h-[650px] w-[90%] sm:w-[85%] outline-dotted lg:mt-[2rem] outline-[2px] sm:py-[2.5rem] sm:px-[3.5rem] p-[1.3rem] relative";

  let dottedOutlineBoxClassName = "outline-fontGray ";
  if (lineColor === "mainBlue") {
    dottedOutlineBoxClassName = "outline-mainBlue";
  }
  return (
    <>
      {isSm ? (
        <div className={`${dottedOutlineBoxClassName} ${basicClass}`}>
          {children}
        </div>
      ) : (
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{
              opacity: 0,
              x: `${lineColor === "mainBlue" ? "-5%" : "5%"}`
            }}
            whileInView={{
              opacity: 1,
              x: "0%",
              transition: {
                duration: 0.5,
                stiffness: 100
              }
            }}
            viewport={{ once: true, amount: 0.4 }}
            className={`${dottedOutlineBoxClassName} ${basicClass}`}
          >
            {children}
          </m.div>
        </LazyMotion>
      )}
    </>
  );
};

export default DottedOutlineBox;
